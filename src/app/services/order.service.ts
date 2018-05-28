import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class OrderService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllOrders() {

  }

  getEmployeeOrders(employeeId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + `employees/${employeeId}/orders`)
  }

  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.URL + `employees/${order.employeeId}/customers/${order.customerId}/orders/`, order, httpOptions)
  }

}
