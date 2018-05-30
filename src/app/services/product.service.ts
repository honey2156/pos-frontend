import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';
import { PosErrorHandler } from '../models/error_handler';

@Injectable()
export class ProductService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL + 'products')
  }

  searchProducts(searchPattern: string): Observable<Product[]> {
    if (!searchPattern.trim()) {
      return this.getAllProducts()
    }
    return this.http.get<Product[]>(this.URL + `products/${searchPattern}`)
      .pipe(
        catchError(PosErrorHandler.handleError<Product[]>('searchProducts', []))
      )
  }
}
