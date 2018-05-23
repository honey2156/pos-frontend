import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-cart-dashboard-nav',
  templateUrl: './cart-dashboard-nav.component.html',
  styleUrls: ['./cart-dashboard-nav.component.css']
})
export class CartDashboardNavComponent implements OnInit {

  customers: Customer[]

  constructor(private customerService: CustomerService) { 
    this.customers = []
  }

  ngOnInit() {
  }

  searchCustomers(searchPattern: string) {
    this.customerService.searchCustomers(searchPattern)
      .subscribe((customers) => {
        this.customers = customers
      })
  }

}
