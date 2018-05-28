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
      })
  }

  displayOrderDetails(order) {
    this.orderView = order
  }
}
