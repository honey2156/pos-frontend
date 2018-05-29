import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';
import { CartCustomerDataService } from '../../../services/cart-customer-data.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-cart-dashboard-nav',
  templateUrl: './cart-dashboard-nav.component.html',
  styleUrls: ['./cart-dashboard-nav.component.css']
})
export class CartDashboardNavComponent implements OnInit {

  customers$: Observable<Customer[]>

  private searchCustomersSource = new BehaviorSubject<Customer[]>(null);
  private currentCustomers = this.searchCustomersSource.asObservable()

  constructor(
    private customerService: CustomerService,
    private cartCustomerDataService: CartCustomerDataService) {
  }

  ngOnInit() {
    this.customers$ = this.currentCustomers.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );
  }

  updateCustomers(customers:Customer[]){
    this.searchCustomersSource.next(customers)
  }

  searchCustomers(searchPattern: string) {
    this.customerService.searchCustomers(searchPattern)
      .subscribe((customers) => {
        this.updateCustomers(customers)
      })
  }

  selectCustomerCart(customer: Customer) {
    this.cartCustomerDataService.changeCustomer(customer)
    this.updateCustomers(null)
  }

}
