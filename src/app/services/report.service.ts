import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Report } from '../models/report';
import { CashDrawerService } from './cash-drawer.service';
import { OrderService } from './order.service';
import { CashDrawer } from '../models/cash_drawer';
import { Order } from '../models/order';

@Injectable()
export class ReportService {

  drawer: CashDrawer
  employeeId: number
  groupedOrders = []
  reportOrders = []
  reports: Report[]


  constructor(
    private cashDrawerService: CashDrawerService,
    private orderService: OrderService) { }


  generateAndDownloadReport(employeeId: number) {
    this.employeeId = employeeId
    this.setReport()
  }

  downloadCSVFile(reports: Report[]) {
    var csvData = this.ConvertToCSV(reports);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Report.csv';
    a.click();
  }

  ConvertToCSV(objArray: Report[]) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";

    for (var index in objArray[0]) {
      row += index + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }

  getTransactions() {
    console.log('getTransactions')
    this.orderService.getEmployeeAlldrawers(this.employeeId)
      .subscribe((employeeDrawers) => {
        let arr = [];
        for (let drawer of employeeDrawers) {
          // /  let orderPromise:
          arr.push(new Promise((resolve, reject) => {
            this.orderService.getDrawerOrders(drawer.id)
              .subscribe((orders) => {
                let obj = {
                  orderDate: drawer.date,
                  startingBalance: drawer.startingBalance,
                  endingBalance: drawer.endingBalance,
                  orders: orders.filter(o => o.status === true),
                  allOrders: orders
                }
                console.log(obj.orders)
                this.reportOrders.push(obj)
                resolve(true);
              })
          }))
        }
        Promise.all(arr).then(res => {
          console.log(res)
          this.generateReportFromOrders();
        }).catch(err => {
          console.log(err);
        })

      })
  }

  generateReportFromOrders() {
    let reports: Report[] = []
    this.reportOrders.forEach(element => {
      reports.push(this.createReportRecord(element))
    });
    this.downloadCSVFile(reports)
  }

  createReportRecord(element): Report {
    console.log('createReportRecord' + element.orderDate + ' ' + element.allOrders.length)
    let obj = new Report()
    obj.Date = element.orderDate
    obj.orders = element.allOrders.length
    let cardPayments = 0, cashPayments = 0, totalSales = 0, totalCashPayments = 0, totalCardPayments = 0
    for (let order of element.allOrders) {
      if (order.paymentMode === "CASH") {
        cashPayments++
        totalCashPayments += order.totalAmount
      } else {
        cardPayments++
        totalCardPayments += order.totalAmount
      }
      totalSales += order.totalAmount
    }
    obj.TotalSales = totalSales
    obj.cardPayments = cardPayments
    obj.cashPayments = cashPayments
    obj.TotalCardPayments = totalCardPayments
    obj.TotalCashPayments = totalCashPayments

    return obj
  }

  setReport() {
    console.log('setReport')
    // this.generateReportFromOrders()
    this.getTransactions()
  }

}
