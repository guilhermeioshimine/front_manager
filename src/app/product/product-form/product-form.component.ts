import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { ProductService } from './../../service/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductService,
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
        this.router.navigate(['product']);
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
    this._snackBar.open('Erro ao salvar Produto.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Produto salvo com sucesso.', 'OK', { duration: 5000 });
  }
}
