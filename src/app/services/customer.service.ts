import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { catchError } from 'rxjs/operators';
import { PosErrorHandler } from '../models/error_handler';
import { Constants } from '../constants';

/**
 * Customer Service
 */
@Injectable()
export class CustomerService {

  URL = Constants.BASE_URL + 'customers/'

  constructor(private http: HttpClient) { }

  /**
   * Search customers based on search input
   * 
   * @param searchPattern 
   * @returns Observable<Customer[]>
   */
  searchCustomers(searchPattern: string): Observable<Customer[]> {
    if (!searchPattern.trim()) {
      return of([])
    }
    return this.http.get<Customer[]>(this.URL + `${searchPattern}`)
      .pipe(
        catchError(PosErrorHandler.handleError<Customer[]>('searchCustomers', []))
      )
  }
}
