import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.scss'],
})
export class CompanyDeleteComponent implements OnInit {
  companyId!: number;
  companyName!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Company,
    public companyService: CompanyService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.data.id;
    this.companyName = this.data.name;
  }

  public onDelete(id: number) {
    this.companyService.delete(id).subscribe(
      (response) => {
        this.onSuccess();
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['company']);
          });
      },
      (error) => {
        this.onError();
      }
    );
  }

  private onError() {
    this._snackBar.open('Erro ao deletar Empresa.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Empresa deletada com sucesso.', 'OK', {
      duration: 5000,
    });
  }
}
