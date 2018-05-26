import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsDashboardComponent } from './components/products/products-dashboard/products-dashboard.component';
import { ProductsDashboardNavComponent } from './components/products/products-dashboard-nav/products-dashboard-nav.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDashboardViewComponent } from './components/products/product-dashboard-view/product-dashboard-view.component';
import { ProductDataService } from './services/product-data.service';
import { CartDashboardComponent } from './components/cart/cart-dashboard/cart-dashboard.component';
import { CartDashboardNavComponent } from './components/cart/cart-dashboard-nav/cart-dashboard-nav.component';
import { CartDashboardViewComponent } from './components/cart/cart-dashboard-view/cart-dashboard-view.component';
import { CustomerService } from './services/customer.service';
import { AppRoutingModule } from './/app-routing.module';
import { CheckoutDasboardComponent } from './components/checkout-dasboard/checkout-dasboard.component';
import { OrdersListDasboardComponent } from './components/orders-list-dasboard/orders-list-dasboard.component';
import { SaveOrdersDasboardComponent } from './components/save-orders-dasboard/save-orders-dasboard.component';
import { CashDrawerComponent } from './components/cash-drawer/cash-drawer.component';
import { ReportComponent } from './components/report/report.component';
import { CartProductDataService } from './services/cart-product-data.service';
import { CartCustomerDataService } from './services/cart-customer-data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsDashboardComponent,
    ProductsDashboardNavComponent,
    ProductComponent,
    ProductDashboardViewComponent,
    CartDashboardComponent,
    CartDashboardNavComponent,
    CartDashboardViewComponent,
    CheckoutDasboardComponent,
    OrdersListDasboardComponent,
    SaveOrdersDasboardComponent,
    CashDrawerComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService, ProductDataService, CustomerService, CartProductDataService, CartCustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
