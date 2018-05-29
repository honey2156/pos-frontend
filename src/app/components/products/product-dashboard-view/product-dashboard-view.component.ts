import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductDataService } from '../../../services/product-data.service';
import { Observable } from 'rxjs/Observable';
import {
  debounceTime, distinctUntilChanged
} from 'rxjs/operators';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-dashboard-view',
  templateUrl: './product-dashboard-view.component.html',
  styleUrls: ['./product-dashboard-view.component.css']
})
export class ProductDashboardViewComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(private productDataService: ProductDataService, private productService: ProductService) { }

  ngOnInit() {
    // this.productDataService.currentProducts
    //   .subscribe(products => {
    //     this.products = products
    //   })

    this.products$ = this.productDataService.currentProducts.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
  }

}
