import { CompanyService } from './../../service/company/company.service';
import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { Location } from '@angular/common';
import { Company } from 'src/app/model/company';
import { combineAll } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  public form: FormGroup;
  public user!: User;
  public companyList: Company[] = [];
  public companySelected: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      password: [null],
      company: [null],
      role: [null],
    });
  }

  ngOnInit() {
    this.companyService.list().subscribe({
      next: (res) => {
        this.companyList = res;
      },
    });
    this.route.queryParams.subscribe((parameter) => {
      this.userService.listById(parameter['id']).subscribe({
        next: (res) => {
          this.user = res;
          console.log(res);
          this.form.controls['name'].setValue(this.user.name);
          this.form.controls['password'].setValue(this.user.password);
          this.form.controls['role'].setValue(this.user.role);
          this.companySelected = this.user.company.id;
        },
        error: (err) => {
          alert('Erro ao procurar Usuário: ' + this.user.name);
        },
      });
    });
  }

  onSubmit() {
    this.user.company.id = this.form.value.company;
    this.user.company.name = this.getCompanyName(this.form.value.company);
    console.log(this.user);
    this.user.name = this.form.value.name;
    this.user.password = this.form.value.password;
    this.user.role = this.form.value.role;
    // this.userService.update(this.form.value).subscribe(
    this.userService.update(this.user).subscribe(
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
    this._snackBar.open('Erro ao editar Usuário.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Usuário salvo com sucesso.', 'OK', { duration: 5000 });
  }

  private getCompanyName(id: number) {
    let companyName: any;
    companyName = this.companyList.find((company) => company.id === id)?.name;
    return companyName;
  }
}
