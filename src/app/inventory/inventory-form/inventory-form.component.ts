import { ProductService } from './../../service/product/product.service';
import { InventoryService } from './../../service/inventory/inventory.service';
import { Inventory } from './../../model/inventory';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss'],
})
export class InventoryFormComponent implements OnInit {
  public form: FormGroup;
  public productList: Product[] = [];
  public inventory!: Inventory;
  public productSelected!: Product;

  constructor(
    private formBuilder: FormBuilder,
    private inventoryService: InventoryService,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      orderNumber: [null],
      type: [null],
      product: [null],
      amount: [null],
    });
    this.productService.list().subscribe({
      next: (res) => {
        this.productList = res;
      },
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.inventory = this.form.value;
    this.inventoryService.save(this.form.value).subscribe(
      (data) => {
        this.onSuccess();
        this.router.navigate(['inventory']);
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
    this._snackBar.open('Erro ao salvar Movimentação.', 'OK', {
      duration: 5000,
    });
  }

  private onSuccess() {
    this._snackBar.open('Movimentação salva com sucesso.', 'OK', {
      duration: 5000,
    });
  }
}
