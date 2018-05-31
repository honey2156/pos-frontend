import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CashDrawer } from '../models/cash_drawer';
import { catchError } from 'rxjs/operators';
import { PosErrorHandler } from '../models/error_handler';
import { Constants } from '../constants';


@Injectable()
export class CashDrawerService {

  URL = Constants.BASE_URL + `employees/`

  constructor(private http: HttpClient) { }

  getEmployeeDrawer(employeeId: number): Observable<CashDrawer> {
    return this.http.get<CashDrawer>(this.URL + `${employeeId}/drawers`)
      .pipe(
        catchError(PosErrorHandler.handleError<CashDrawer>('getEmployeeDrawer'))
      )
  }

  setOpeningDrawer(employeeId: number, drawer): Observable<any> {
    return this.http.post<CashDrawer>(this.URL + `${employeeId}/drawers`, drawer, Constants.httpOptions)
      .pipe(
        catchError(PosErrorHandler.handleError<any>('setOpeningDrawer'))
      )
  }

  setClosingDrawer(employeeId: number, drawer) {
    return this.http.put<CashDrawer>(this.URL + `${employeeId}/drawers`, drawer, Constants.httpOptions)
      .pipe(
        catchError(PosErrorHandler.handleError<any>('setClosingDrawer'))
      )
  }
}
