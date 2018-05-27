import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../models/product';

@Injectable()
export class CartProductDataService {

  private productSource = new BehaviorSubject<Product>(new Product())
  currentProduct = this.productSource.asObservable()

  private cartProducts = new BehaviorSubject<Product[]>([])
  currentCartProducts = this.cartProducts.asObservable()

  constructor() { }

  addToCart(product:Product){
    this.productSource.next(product)
  }

  updateProductInCart(product: Product) {
    this.productSource.next(product)
  }

  updateProductsInCart(products: Product[]) {
    this.cartProducts.next(products)
  }
}
