import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Product } from '../models/product';

@Injectable()
export class ProductDataService {

  private productSource = new BehaviorSubject<Product[]>([])
  currentProducts = this.productSource.asObservable()

  constructor() { }

  updateProducts(products: Product[]) {
    this.productSource.next(products)
  }
}
