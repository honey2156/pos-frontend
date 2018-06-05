import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { PosErrorHandler } from '../models/error_handler';
import { Constants } from '../constants';

/**
 * Login Service
 */
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Method for login authentication
   * 
   * @param employee 
   * @returns Observable<Employee>
   */
  login(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(Constants.BASE_URL + 'employees/login', employee, Constants.httpOptions)
      .pipe(
        catchError(PosErrorHandler.handleError<Employee>('login'))
      )
  }
}
