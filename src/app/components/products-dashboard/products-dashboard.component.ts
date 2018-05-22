import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getAllProducts()
      .subscribe((products) => {
        this.products = products
      })
  }
}
