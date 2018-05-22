import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.URL+'products')
  }
}
