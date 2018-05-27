import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartProductDataService } from '../../../services/cart-product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product

  constructor(private cartProductDataService: CartProductDataService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartProductDataService.addToCart(product)
  }

}
