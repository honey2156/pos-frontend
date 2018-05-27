import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CartCustomerDataService } from '../../../services/cart-customer-data.service';
import { CartProductDataService } from '../../../services/cart-product-data.service';
import { OrderDetail } from '../../../models/order_detail';
import { Product } from '../../../models/product';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-cart-dashboard-view',
  templateUrl: './cart-dashboard-view.component.html',
  styleUrls: ['./cart-dashboard-view.component.css']
})
export class CartDashboardViewComponent implements OnInit {

  customer: Customer
  orderDetails: OrderDetail[]
  tax: number = 10
  total: number = 0
  subtotal: number = 0

  constructor(
    private cartCustomerDataService: CartCustomerDataService,
    private cartProductDataService: CartProductDataService) {
    this.customer = new Customer()
    this.orderDetails = []
  }

  ngOnInit() {
    this.cartCustomerDataService.currentCustomer
      .subscribe((customer) => {
        this.customer = customer
      })

    this.cartProductDataService.currentProduct
      .subscribe((cartProduct) => {
        if (cartProduct && cartProduct.id) {
          let orderDetail = this.orderDetails.find((p) => p.productId === cartProduct.id)
          if (orderDetail === undefined) {
            orderDetail = new OrderDetail()
            orderDetail.productId = cartProduct.id
            orderDetail.product = cartProduct
            orderDetail.quantity = 0;
            this.orderDetails.push(orderDetail)
          }
          orderDetail.quantity++
          this.orderDetails = this.orderDetails.filter((cartProduct) => cartProduct.quantity > 0)
        }
        this.maintainTotals()
      })
  }

  incrementProductQuantity(oDetail: OrderDetail) {
    let orderDetail = this.orderDetails.find((p) => p.productId === oDetail.productId)
    orderDetail.quantity++
    this.orderDetails = this.orderDetails.filter((cartProduct) => cartProduct.quantity > 0)
    this.maintainTotals()
  }

  decrementProductQuantity(oDetail: OrderDetail) {
    let orderDetail = this.orderDetails.find((p) => p.productId === oDetail.productId)
    orderDetail.quantity--
    this.orderDetails = this.orderDetails.filter((cartProduct) => cartProduct.quantity > 0)
    this.maintainTotals()
  }

  calculateSubTotal() {
    this.subtotal = 0
    for (let orderDetail of this.orderDetails) {
      this.subtotal += (orderDetail.product.price * orderDetail.quantity)
    }
  }

  calculateTotal() {
    this.total = this.subtotal + this.tax
  }

  maintainTotals() {
    this.calculateSubTotal()
    this.calculateTotal()
  }

}
