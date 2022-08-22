import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  form: FormGroup;
  // company: Company;

  constructor(
    private formBuilder: FormBuilder,
    private service: CompanyService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (data) => {
        this.onSuccess();
        this.router.navigate(['company']);
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
    this._snackBar.open('Erro ao salvar Empresa.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Empresa salva com sucesso.', 'OK', { duration: 5000 });
  }
}
