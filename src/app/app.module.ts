import { AuthService } from './service/auth/auth.service';
import { LoginModule } from './login/login.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { SharedModule } from './shared/shared.module';
import { InventoryModule } from './inventory/inventory.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    ContentWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SharedModule,
    UserModule,
    ProductModule,
    InventoryModule,
    LoginModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
