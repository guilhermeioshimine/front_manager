import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CompanyDeleteComponent } from './company-delete/company-delete.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyFormComponent,
    CompanyEditComponent,
    CompanyDeleteComponent,
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
export class CompanyModule {}
