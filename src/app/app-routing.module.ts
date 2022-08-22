import { LoginComponent } from './login/login/login.component';
import { InventoryFormComponent } from './inventory/inventory-form/inventory-form.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryHistoryListComponent } from './inventory/inventory-history-list/inventory-history-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyFormComponent } from './company/company-form/company-form.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'company', component: CompanyListComponent },
  { path: 'company/new', component: CompanyFormComponent },
  { path: 'company/edit', component: CompanyEditComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user/new', component: UserFormComponent },
  { path: 'user/edit', component: UserEditComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/new', component: ProductFormComponent },
  { path: 'product/edit', component: ProductEditComponent },
  { path: 'inventory/history', component: InventoryHistoryListComponent },
  { path: 'inventory', component: InventoryListComponent },
  { path: 'inventory/new', component: InventoryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
