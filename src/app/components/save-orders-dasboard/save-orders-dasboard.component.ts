import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { ReloadCartService } from '../../services/reload-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-orders-dasboard',
  templateUrl: './save-orders-dasboard.component.html',
  styleUrls: ['./save-orders-dasboard.component.css']
})
export class SaveOrdersDasboardComponent implements OnInit {

  orders: Order[] = []

  constructor(
    private orderService: OrderService,
    private reloadCartService: ReloadCartService,
    private router: Router) { }

  ngOnInit() {
    this.getEmployeeSavedOrders()
  }

  getEmployeeSavedOrders() {
    let employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
    this.orderService.getEmployeeOrders(employeeId)
      .subscribe((orders) => {
        orders = orders.filter(order => order.status === false)
        this.orders = orders
      })
  }

  reloadOrder(order: Order) {
    this.reloadCartService.updateOrder(order)
    this.router.navigate(['checkout'])
  }
}
