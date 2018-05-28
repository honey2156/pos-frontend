import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-save-orders-dasboard',
  templateUrl: './save-orders-dasboard.component.html',
  styleUrls: ['./save-orders-dasboard.component.css']
})
export class SaveOrdersDasboardComponent implements OnInit {

  orders: Order[] = []

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getEmployeeSavedOrders()
  }

  getEmployeeSavedOrders() {
    let employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
    this.orderService.getEmployeeOrders(employeeId)
      .subscribe((orders) => {
        orders = orders.filter(order=> order.status === false)
        this.orders = orders
      })
  }

}
