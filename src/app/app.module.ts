import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { ProductsDashboardNavComponent } from './components/products-dashboard-nav/products-dashboard-nav.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsDashboardComponent,
    ProductsDashboardNavComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
