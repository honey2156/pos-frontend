import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../models/product';

/**
 * Shared service for data transfer from products to cart
 */
@Injectable()
export class CartProductDataService {

  private productSource = new BehaviorSubject<Product>(new Product())
  currentProduct = this.productSource.asObservable()

  constructor() { }
  
  /**
   * Add product to the cart
   * @param product 
   */
  addToCart(product: Product) {
    this.productSource.next(product)
  }

  updateProductInCart(product: Product) {
    this.productSource.next(product)
  }
}
