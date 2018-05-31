import { Component, OnInit } from '@angular/core';
import { CashDrawer } from '../../models/cash_drawer';
import { CashDrawerService } from '../../services/cash-drawer.service';
import { OrderService } from '../../services/order.service';
import { ReportService } from '../../services/report.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cash-drawer',
  templateUrl: './cash-drawer.component.html',
  styleUrls: ['./cash-drawer.component.css']
})
export class CashDrawerComponent implements OnInit {

  drawer: CashDrawer
  employeeId: number
  groupedOrders = []
  cashDrawerForm: FormGroup = new FormGroup({
    startingBalance: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern('[0-9]*\.?[0-9]{1,2}')])
  })

  constructor(
    private cashDrawerService: CashDrawerService,
    private orderService: OrderService,
    private reportService: ReportService) {
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
    if (startingBalance < 0) {
      return;
    }
    this.cashDrawerService.setOpeningDrawer(this.employeeId, { startingBalance } as CashDrawer)
      .subscribe((data) => {
        this.getCashDrawer()
      })
  }

}
