import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

@Injectable()
export class CustomerService {

  URL = 'http://localhost:8080/customers/'

  constructor(private http: HttpClient) { }

  searchCustomers(searchPattern: string): Observable<Customer[]> {
    if (!searchPattern.trim()) {
      return of([])
    }
    return this.http.get<Customer[]>(this.URL + `${searchPattern}`)
  }
}
