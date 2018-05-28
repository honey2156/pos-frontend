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

  constructor(private http:HttpClient) { }

  getAllOrders(){

  }

  placeOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.URL+`emplpoyees/${order.employeeId}/customers/${order.customerId}/orders/`, order, httpOptions)
  }

}
