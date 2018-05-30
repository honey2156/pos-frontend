import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';
import { CashDrawer } from '../models/cash_drawer';
import { catchError } from 'rxjs/operators';
import { PosErrorHandler } from '../models/error_handler';

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
    .pipe(
      catchError(PosErrorHandler.handleError<Order[]>('getEmployeeOrders', []))
    )
  }

  getDrawerOrders(cashDrawerId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + `cashdrawers/${cashDrawerId}/orders`)
    .pipe(
      catchError(PosErrorHandler.handleError<Order[]>('getDrawerOrders', []))
    )
  }

  getEmployeeAlldrawers(employeeId: number): Observable<CashDrawer[]> {
    return this.http.get<CashDrawer[]>(this.URL + `employees/${employeeId}/drawers/all`)
    .pipe(
      catchError(PosErrorHandler.handleError<CashDrawer[]>('getEmployeeAlldrawers', []))
    )
  }

  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.URL + `employees/${order.employeeId}/customers/${order.customerId}/orders/`, order, httpOptions)
    .pipe(
      catchError(PosErrorHandler.handleError<Order>('placeOrder'))
    )
  }

}
