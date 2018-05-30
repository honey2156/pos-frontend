import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { PosErrorHandler } from '../models/error_handler';

@Injectable()
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  login(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:8080/employees/login', employee, this.httpOptions)
      .pipe(
        catchError(PosErrorHandler.handleError<Employee>('login'))
      )
  }
}
