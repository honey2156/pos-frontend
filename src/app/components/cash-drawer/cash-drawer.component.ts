import { Component, OnInit } from '@angular/core';
import { CashDrawer } from '../../models/cash_drawer';
import { CashDrawerService } from '../../services/cash-drawer.service';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-cash-drawer',
  templateUrl: './cash-drawer.component.html',
  styleUrls: ['./cash-drawer.component.css']
})
export class CashDrawerComponent implements OnInit {

  drawer: CashDrawer
  employeeId: number
  groupedOrders = []

  constructor(
    private cashDrawerService: CashDrawerService,
    private orderService: OrderService) {
    this.drawer = new CashDrawer()
  }

  ngOnInit() {
    this.employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
    this.getCashDrawer()
    this.getTransactions()
  }

  getCashDrawer() {
    this.cashDrawerService.getEmployeeDrawer(this.employeeId)
      .subscribe(drawer => {
        this.drawer = drawer
      })
  }

  getTransactions() {
    this.orderService.getEmployeeAlldrawers(this.employeeId)
      .subscribe((employeeDrawers) => {
        for (let drawer of employeeDrawers) {
          let obj = {
            orderDate: drawer.date,
            startingBalance: drawer.startingBalance,
            endingBalance: drawer.endingBalance,
            orders: []
          }
          this.orderService.getDrawerOrders(drawer.id)
            .subscribe((orders) => {
              orders = orders.filter(o => o.paymentMode === "CASH")
              obj.orders = orders
            })
          this.groupedOrders.push(obj)
        }
      })
  }

  setOpeningBalance(startingBalance: number) {
    this.cashDrawerService.setOpeningDrawer(this.employeeId, { startingBalance } as CashDrawer)
      .subscribe((data) => {
        console.log(data)
        this.getCashDrawer()
      })
  }

  // groupOrders(orders) {
  //   let i: number
  //   let n = orders.length
  //   for (i = 0; i < n; i++) {
  //     let date = orders[i].orderDate
  //     let j: number = i
  //     let dateOrders: Order[] = []
  //     for (j; j < n && orders[j].orderDate === date; j++) {
  //       dateOrders.push(orders[j])
  //       // console.log(i + ' ' + this.orders[j].orderDate)
  //     }
  //     i = j
  //     this.groupedOrders.push({
  //       orderDate: date,
  //       orders: dateOrders
  //     })
  //   }
  // }
}
