import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CashDrawer } from '../models/cash_drawer';
import { catchError } from 'rxjs/operators';
import { PosErrorHandler } from '../models/error_handler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CashDrawerService {

  URL = `http://localhost:8080/employees/`

  constructor(private http: HttpClient) { }

  getEmployeeDrawer(employeeId:number): Observable<CashDrawer> {
    return this.http.get<CashDrawer>(this.URL+`${employeeId}/drawers`)
    .pipe(
      catchError(PosErrorHandler.handleError<CashDrawer>('getEmployeeDrawer'))
    )
  }

  setOpeningDrawer(employeeId:number, drawer):Observable<any>{
    return this.http.post<CashDrawer>(this.URL+`${employeeId}/drawers`, drawer, httpOptions)
    .pipe(
      catchError(PosErrorHandler.handleError<any>('setOpeningDrawer'))
    )
  }

  setClosingDrawer(employeeId:number, drawer){
    return this.http.put<CashDrawer>(this.URL+`${employeeId}/drawers`, drawer, httpOptions)
    .pipe(
      catchError(PosErrorHandler.handleError<any>('setClosingDrawer'))
    )
  }
}
