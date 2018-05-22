import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { ProductsDashboardNavComponent } from './components/products-dashboard-nav/products-dashboard-nav.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDashboardViewComponent } from './components/product-dashboard-view/product-dashboard-view.component';
import { ProductDataService } from './services/product-data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsDashboardComponent,
    ProductsDashboardNavComponent,
    ProductComponent,
    ProductDashboardViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService, ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
