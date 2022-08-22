import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss'],
})
export class CompanyEditComponent implements OnInit {
  form: FormGroup;
  company!: Company;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((parameter) => {
      this.companyService.listById(parameter['id']).subscribe({
        next: (res) => {
          this.company = res;
          this.form.controls['name'].setValue(this.company.name);
          this.form.controls['id'].setValue(this.company.id);
        },
        error: (err) => {
          alert('Erro ao procurar Empresa: ' + this.company.name);
        },
      });
    });
  }

  onSubmit() {
    this.companyService.update(this.form.value).subscribe(
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
    this._snackBar.open('Erro ao editar Empresa.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Empresa salva com sucesso.', 'OK', { duration: 5000 });
  }
}
