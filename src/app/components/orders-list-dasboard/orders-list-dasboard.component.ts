import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { OrderDetail } from '../../models/order_detail';

@Component({
  selector: 'app-orders-list-dasboard',
  templateUrl: './orders-list-dasboard.component.html',
  styleUrls: ['./orders-list-dasboard.component.css']
})
export class OrdersListDasboardComponent implements OnInit {

  orders: Order[] = []
  groupedOrders = []
  orderView: Order = new Order()

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getEmployeeOrders()
  }

  getEmployeeOrders() {
    let employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
    this.orderService.getEmployeeOrders(employeeId)
      .subscribe((orders) => {
        this.orders = orders
        this.groupOrders()
      })
  }

  groupOrders() {
    let i: number
    let n = this.orders.length
    for (i = 0; i < n; i++) {
      let date = this.orders[i].orderDate
      let j: number = i
      let dateOrders: Order[] = []
      for (j; j < n && this.orders[j].orderDate === date; j++) {
        dateOrders.push(this.orders[j])
        // console.log(i + ' ' + this.orders[j].orderDate)
      }
      i = j ? j - 1 : j
      this.groupedOrders.push({
        orderDate: date,
        orders: dateOrders
      })
    }
  }

  displayOrderDetails(order) {
    this.orderView = order
  }
}
