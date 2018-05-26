import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CartCustomerDataService } from '../../../services/cart-customer-data.service';

@Component({
  selector: 'app-cart-dashboard-view',
  templateUrl: './cart-dashboard-view.component.html',
  styleUrls: ['./cart-dashboard-view.component.css']
})
export class CartDashboardViewComponent implements OnInit {

  customer: Customer

  constructor(private cartCustomerDataService: CartCustomerDataService) {
    this.customer = new Customer()
   }

  ngOnInit() {
    this.cartCustomerDataService.currentCustomer
      .subscribe((customer) => {
        this.customer = customer
      })
  }



}
