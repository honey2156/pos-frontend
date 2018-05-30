import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { OrderDetail } from '../../../models/order_detail';
import { PaymentMode } from '../../../models/payment_mode';
import { CartCustomerDataService } from '../../../services/cart-customer-data.service';
import { CartProductDataService } from '../../../services/cart-product-data.service';
import { Order } from '../../../models/order';
import { OrderService } from '../../../services/order.service';
import { Product } from '../../../models/product';
import { ReloadCartService } from '../../../services/reload-cart.service';

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
  reloadedOrder: Order
  disableButtons: boolean = false
  paymentModes: PaymentMode[] = [
    { name: "Please select mode of payment", value: '' },
    { name: "Cash", value: "CASH" },
    { name: "Card", value: "CARD" }
  ]
  togglePaymentOptions: boolean = false
  placedOrder: Order = new Order()
  savedOrder: Order = new Order()
  isPaymentModeSelected = false
  isCustomerSelected = true

  constructor(
    private cartCustomerDataService: CartCustomerDataService,
    private cartProductDataService: CartProductDataService,
    private orderService: OrderService,
    private reloadCartService: ReloadCartService) {
    this.customer = new Customer()
    this.orderDetails = []
  }

  ngOnInit() {
    this.cartCustomerDataService.currentCustomer
      .subscribe((customer) => {
        this.customer = customer
      })

    this.reloadCartService.currentOrder
      .subscribe((order) => {
        this.reloadedOrder = order
        if (order && order.id) {
          this.customer = order.customer
          this.orderDetails = order.orderDetails
          this.disableButtons = true
        }
      })

    this.cartProductDataService.currentProduct
      .subscribe((cartProduct) => {
        if (cartProduct && cartProduct.id) {
          if (this.customer.id === undefined) {
            this.isCustomerSelected = false
            return
          }
          let orderDetail = this.orderDetails.find((p) => p.productId === cartProduct.id)
          if (orderDetail === undefined) {
            orderDetail = new OrderDetail()
            orderDetail.productId = cartProduct.id
            orderDetail.product = cartProduct
            orderDetail.price = cartProduct.price
            orderDetail.quantity = 0;
            this.orderDetails.push(orderDetail)
          }
          if (cartProduct.stock - orderDetail.quantity > 0) {
            orderDetail.quantity++
            this.orderDetails = this.orderDetails.filter((cartProduct) => cartProduct.quantity > 0)
          }
          else {
            alert('product stock limit reached')
          }
        }
        this.maintainTotals()
      })
  }

  incrementProductQuantity(oDetail: OrderDetail) {
    let orderDetail = this.orderDetails.find((p) => p.productId === oDetail.productId)
    if (orderDetail.product.stock - orderDetail.quantity > 0) {
      orderDetail.quantity++
      this.orderDetails = this.orderDetails.filter((cartProduct) => cartProduct.quantity > 0)
    }
    else {
      alert('product stock limit reached')
    }
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

  clearCart() {
    this.orderDetails = []
    this.maintainTotals()
  }

  resetCart() {
    this.customer = new Customer()
    this.orderDetails = []
    this.subtotal = 0
    this.togglePaymentOptions = false
    this.disableButtons = false
    this.reloadedOrder = new Order()
    this.cartProductDataService.updateProductInCart(new Product())
    this.cartCustomerDataService.changeCustomer(new Customer())
    this.reloadCartService.updateOrder(new Order())
  }

  placeOrder(paymentMode: string) {
    let order: Order
    if (this.reloadedOrder && this.reloadedOrder.id) {
      order = this.reloadedOrder
      order.paymentMode = paymentMode
      order.employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
      order.customerId = this.customer.id
    } else {
      order = this.createOrder(paymentMode)
    }
    order.status = true
    this.orderService.placeOrder(order)
      .subscribe((order) => {
        console.log(order)
        this.placedOrder = order
      })
    this.resetCart()
  }

  saveOrder(paymentMode: string) {
    let order = this.createOrder(paymentMode)
    this.orderService.placeOrder(order)
      .subscribe((order) => {
        console.log(order)
        this.savedOrder = order
      })

    this.resetCart()
  }

  createOrder(paymentMode: string) {
    let order = new Order()
    order.employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
    order.customerId = this.customer.id
    order.paymentMode = paymentMode
    order.totalAmount = this.total
    let oDetails = []
    this.orderDetails.forEach(element => {
      oDetails.push({
        product: element.product,
        price: element.price,
        quantity: element.quantity
      })
    });

    order.orderDetails = oDetails
    return order
  }

  selectedPaymentMode(mode: string) {
    this.isPaymentModeSelected = mode !== ''
  }
}
