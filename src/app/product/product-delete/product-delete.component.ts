import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  productId!: number;
  productName!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public productService: ProductService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.data.id;
    this.productName = this.data.name;
  }

  public onDelete(id: number) {
    this.productService.delete(id).subscribe(
      (response) => {
        this.onSuccess();
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['product']);
          });
      },
      (error) => {
        this.onError();
      }
    );
  }

  private onError() {
    this._snackBar.open('Erro ao deletar Produto.', 'OK', { duration: 5000 });
  }

  private onSuccess() {
    this._snackBar.open('Produto deletado com sucesso.', 'OK', {
      duration: 5000,
    });
  }
}
