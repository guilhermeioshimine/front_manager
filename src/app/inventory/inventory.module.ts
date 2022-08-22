import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from '../company/company-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { InventoryHistoryListComponent } from './inventory-history-list/inventory-history-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';

@NgModule({
  declarations: [
    InventoryHistoryListComponent,
    InventoryListComponent,
    InventoryFormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    AppMaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class InventoryModule {}
