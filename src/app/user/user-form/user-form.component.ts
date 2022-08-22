import { CompanyService } from 'src/app/service/company/company.service';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';

import { UserService } from './../../service/user/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;
  public disableSelect = new FormControl(false);
  public companyList: Company[] = [];
  public user!: User;
  public companySelected!: Company;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      password: [null],
      company: [null],
      role: [null],
    });
    this.companyService.list().subscribe({
      next: (res) => {
        this.companyList = res;
      },
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.user = this.form.value;
    this.userService.save(this.form.value).subscribe(
      (data) => {
        this.onSuccess();
        this.router.navigate(['user']);
      },
      (error) => {
        this.onError();
      }
    );
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar Usuário.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Usuário salva com sucesso.', 'OK', { duration: 5000 });
  }
}
