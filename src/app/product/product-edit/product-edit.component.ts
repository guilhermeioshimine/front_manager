import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  product!: Product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
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
      this.productService.listById(parameter['id']).subscribe({
        next: (res) => {
          this.product = res;
          this.form.controls['name'].setValue(this.product.name);
          this.form.controls['id'].setValue(this.product.id);
        },
        error: (err) => {
          alert('Erro ao procurar Produto: ' + this.product.name);
        },
      });
    });
  }

  onSubmit() {
    this.productService.update(this.form.value).subscribe(
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
    this._snackBar.open('Erro ao editar Produto.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Produto salvo com sucesso.', 'OK', { duration: 5000 });
  }
}
