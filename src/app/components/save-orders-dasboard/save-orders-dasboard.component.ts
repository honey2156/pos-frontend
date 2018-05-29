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
  groupedOrders = []
  orderView: Order = new Order()


  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getEmployeeSavedOrders()
  }

  getEmployeeSavedOrders() {
    let employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
    this.orderService.getEmployeeOrders(employeeId)
      .subscribe((orders) => {
        orders = orders.filter(order => order.status === false)
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
      i = j
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
