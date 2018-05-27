import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CashDrawer } from '../models/cash_drawer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CashDrawerService {

  URL = `http://localhost:8080/employees/`

  constructor(private http: HttpClient) { }

  getEmployeeDrawer(employeeId:number): Observable<CashDrawer> {
    return this.http.get<CashDrawer>(this.URL+`${employeeId}/drawers`)
  }

  setOpeningDrawer(employeeId:number, drawer):Observable<any>{
    return this.http.post<CashDrawer>(this.URL+`${employeeId}/drawers`, drawer, httpOptions)
  }

  setClosingDrawer(employeeId:number, drawer){
    return this.http.put<CashDrawer>(this.URL+`${employeeId}/drawers`, drawer, httpOptions)
  }
}
