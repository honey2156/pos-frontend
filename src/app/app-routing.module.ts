import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashDrawerComponent } from './components/cash-drawer/cash-drawer.component';
import { CheckoutDasboardComponent } from './components/checkout-dasboard/checkout-dasboard.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersListDasboardComponent } from './components/orders-list-dasboard/orders-list-dasboard.component';
import { ReportComponent } from './components/report/report.component';
import { SaveOrdersDasboardComponent } from './components/save-orders-dasboard/save-orders-dasboard.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: 'checkout', component: CheckoutDasboardComponent, canActivate: [AuthGuardService] },
  { path: 'orders', component: OrdersListDasboardComponent, canActivate: [AuthGuardService] },
  { path: 'saved-orders', component: SaveOrdersDasboardComponent, canActivate: [AuthGuardService] },
  { path: 'reports', component: ReportComponent, canActivate: [AuthGuardService] },
  { path: 'cash-drawer', component: CashDrawerComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
