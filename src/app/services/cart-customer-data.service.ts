import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Customer } from '../models/customer';

/**
 * Shared service for data transfer between customer and cart
 */
@Injectable()
export class CartCustomerDataService {

  private customerSource = new BehaviorSubject<Customer>(new Customer())
  currentCustomer = this.customerSource.asObservable()

  constructor() { }

  changeCustomer(customer: Customer) {
    this.customerSource.next(customer)
  }

}
