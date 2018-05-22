import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductDataService } from '../../../services/product-data.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-products-dashboard-nav',
  templateUrl: './products-dashboard-nav.component.html',
  styleUrls: ['./products-dashboard-nav.component.css']
})
export class ProductsDashboardNavComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private productDataService: ProductDataService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  updateProducts(products: Product[]) {
    this.productDataService.updateProducts(products)
  }

  getAllProducts() {
    this.productService.getAllProducts()
      .subscribe((products) => {
        this.updateProducts(products)
      })
  }

  searchProducts(searchPattern: string) {
    this.productService.searchProducts(searchPattern)
      .subscribe((products) => {
        this.updateProducts(products)
      })
  }
}
