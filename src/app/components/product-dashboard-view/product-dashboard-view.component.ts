import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product-dashboard-view',
  templateUrl: './product-dashboard-view.component.html',
  styleUrls: ['./product-dashboard-view.component.css']
})
export class ProductDashboardViewComponent implements OnInit {

  products: Product[]

  constructor(private productDataService: ProductDataService) { }

  ngOnInit() {
    this.productDataService.currentProducts
      .subscribe(products => {
        this.products = products
      })
  }

}
