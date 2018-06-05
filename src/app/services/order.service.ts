import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';
import { CashDrawer } from '../models/cash_drawer';
import { catchError } from 'rxjs/operators';
import { PosErrorHandler } from '../models/error_handler';
import { Constants } from '../constants';

/**
 * Order Service
 */
@Injectable()
export class OrderService {

  URL = Constants.BASE_URL

  constructor(private http: HttpClient) { }

  getAllOrders() {

  }

  /**
   * Get all orders of an employee
   * 
   * @param employeeId 
   * @returns Observable<Order[]>
   */
  getEmployeeOrders(employeeId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + `employees/${employeeId}/orders`)
      .pipe(
        catchError(PosErrorHandler.handleError<Order[]>('getEmployeeOrders', []))
      )
  }

  /**
   * Get all Orders served by a cash drawer
   * 
   * @param cashDrawerId 
   * @returns Observable<Order[]>
   */
  getDrawerOrders(cashDrawerId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL + `cashdrawers/${cashDrawerId}/orders`)
      .pipe(
        catchError(PosErrorHandler.handleError<Order[]>('getDrawerOrders', []))
      )
  }

  /**
   * Get all cash drawers of an employee
   * 
   * @param employeeId 
   * @returns Observable<CashDrawer[]>
   */
  getEmployeeAlldrawers(employeeId: number): Observable<CashDrawer[]> {
    return this.http.get<CashDrawer[]>(this.URL + `employees/${employeeId}/drawers/all`)
      .pipe(
        catchError(PosErrorHandler.handleError<CashDrawer[]>('getEmployeeAlldrawers', []))
      )
  }

  /**
   * Place an order
   * 
   * @param order 
   * @returns Observable<Order>
   */
  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.URL + `employees/${order.employeeId}/customers/${order.customerId}/orders/`, order, Constants.httpOptions)
      .pipe(
        catchError(PosErrorHandler.handleError<Order>('placeOrder'))
      )
  }

}
