import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Order } from '../models/order';

@Injectable()
export class ReloadCartService {

  orderSource = new BehaviorSubject<Order>(new Order())
  currentOrder = this.orderSource.asObservable()

  constructor() { }

  updateOrder(order: Order) {
    this.orderSource.next(order)
  }

}
