import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { CartDashboardNavComponent } from './components/cart/cart-dashboard-nav/cart-dashboard-nav.component';
import { CartDashboardViewComponent } from './components/cart/cart-dashboard-view/cart-dashboard-view.component';
import { CartDashboardComponent } from './components/cart/cart-dashboard/cart-dashboard.component';
import { CashDrawerComponent } from './components/cash-drawer/cash-drawer.component';
import { CheckoutDasboardComponent } from './components/checkout-dasboard/checkout-dasboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersListDasboardComponent } from './components/orders-list-dasboard/orders-list-dasboard.component';
import { OrdersListDetailComponent } from './components/orders-list-detail/orders-list-detail.component';
import { ProductDashboardViewComponent } from './components/products/product-dashboard-view/product-dashboard-view.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsDashboardNavComponent } from './components/products/products-dashboard-nav/products-dashboard-nav.component';
import { ProductsDashboardComponent } from './components/products/products-dashboard/products-dashboard.component';
import { ReportComponent } from './components/report/report.component';
import { SaveOrdersDasboardComponent } from './components/save-orders-dasboard/save-orders-dasboard.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { CartCustomerDataService } from './services/cart-customer-data.service';
import { CartProductDataService } from './services/cart-product-data.service';
import { CashDrawerService } from './services/cash-drawer.service';
import { CustomerService } from './services/customer.service';
import { LoginDataService } from './services/login-data.service';
import { LoginService } from './services/login.service';
import { OrderService } from './services/order.service';
import { ProductDataService } from './services/product-data.service';
import { ProductService } from './services/product.service';
import { ReloadCartService } from './services/reload-cart.service';
import { SavedOrdersDetailComponent } from './components/saved-orders-detail/saved-orders-detail.component';
import { ReportService } from './services/report.service';




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
    ReportComponent,
    LoginComponent,
    OrdersListDetailComponent,
    SavedOrdersDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, ProductDataService, CustomerService, CartProductDataService,
    CartCustomerDataService, LoginService, LoginDataService, CashDrawerService, OrderService,
    AuthService, AuthGuardService, ReloadCartService, ReportService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
