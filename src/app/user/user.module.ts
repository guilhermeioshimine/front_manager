import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserDeleteComponent,
    UserEditComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
