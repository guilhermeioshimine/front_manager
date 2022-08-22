import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyDeleteComponent } from 'src/app/company/company-delete/company-delete.component';
import { Company } from 'src/app/model/company';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { ProductDeleteComponent } from 'src/app/product/product-delete/product-delete.component';

import { UserDeleteComponent } from './../../user/user-delete/user-delete.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDeleteDialog(company: Company) {
    this.dialog.open(CompanyDeleteComponent, {
      width: '500px',
      disableClose: true,
      data: {
        id: company.id,
        name: company.name,
      },
    });
  }

  openUserDeleteDialog(user: User) {
    this.dialog.open(UserDeleteComponent, {
      width: '500px',
      disableClose: true,
      data: {
        id: user.id,
        company: user.company,
        name: user.name,
        role: user.role,
        is_active: user.is_active,
      },
    });
  }

  openProductDeleteDialog(product: Product) {
    this.dialog.open(ProductDeleteComponent, {
      width: '500px',
      disableClose: true,
      data: {
        id: product.id,
        name: product.name,
      },
    });
  }
}
