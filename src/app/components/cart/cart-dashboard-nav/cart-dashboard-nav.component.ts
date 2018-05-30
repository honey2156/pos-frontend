import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Customer } from '../../../models/customer';
import { CartCustomerDataService } from '../../../services/cart-customer-data.service';
import { CustomerService } from '../../../services/customer.service';

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
    this.clearCustomers()
  }

  clearCustomers(){
    this.updateCustomers(null)
  }

}
