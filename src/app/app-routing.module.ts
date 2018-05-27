import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashDrawerComponent } from './components/cash-drawer/cash-drawer.component';
import { CheckoutDasboardComponent } from './components/checkout-dasboard/checkout-dasboard.component';
import { OrdersListDasboardComponent } from './components/orders-list-dasboard/orders-list-dasboard.component';
import { SaveOrdersDasboardComponent } from './components/save-orders-dasboard/save-orders-dasboard.component';
import { ReportComponent } from './components/report/report.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: 'checkout', component: CheckoutDasboardComponent },
  { path: 'orders', component: OrdersListDasboardComponent },
  { path: 'saved-orders', component: SaveOrdersDasboardComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'cash-drawer', component: CashDrawerComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
