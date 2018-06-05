import { Injectable } from '@angular/core';
import { Report } from '../models/report';
import { CashDrawerService } from './cash-drawer.service';
import { OrderService } from './order.service';
import { Employee } from '../models/employee';

/**
 * Report Service
 */
@Injectable()
export class ReportService {

  loggedUser: Employee
  employeeId: number
  reportOrders = []


  constructor(
    private cashDrawerService: CashDrawerService,
    private orderService: OrderService) { }

  /**
   * Method called from view to generate and download report
   * 
   * @param user 
   */
  generateAndDownloadReport(user: Employee) {
    // Set logged user
    this.loggedUser = user
    this.employeeId = this.loggedUser.id
    // initialize report
    this.setReport()
  }

  /**
   * Method to download generated report as excel file
   * 
   * @param reports 
   */
  downloadCSVFile(reports: Report[]) {
    var csvData = this.ConvertToCSV(reports);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = this.loggedUser.name + '_report.csv';
    a.click();
  }

  /**
   * Method to convert json object into csv
   * 
   * @param objArray 
   */
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

  /**
   * Get all transaction details of employee
   */
  getTransactions() {
    this.orderService.getEmployeeAlldrawers(this.employeeId)
      .subscribe((employeeDrawers) => {
        let arr = [];
        for (let drawer of employeeDrawers) {
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
                this.reportOrders.push(obj)
                resolve(true);
              })
          }))
        }
        Promise.all(arr)
          .then(res => {
            this.generateReportFromOrders();
          })
          .catch(err => {
            console.log(err);
          })
      })
  }

  /**
   * Generates summary for each day and downloads as excel file
   */
  generateReportFromOrders() {
    let reports: Report[] = []
    this.reportOrders.forEach(element => {
      reports.push(this.createReportRecord(element))
    });
    this.downloadCSVFile(reports)
    this.reportOrders = []
  }

  /**
   * Generates summary for given day
   * 
   * @param element 
   */
  createReportRecord(element): Report {
    let obj = new Report()
    obj.Date = element.orderDate
    obj.orders = element.orders.length
    obj.savedOrders = element.allOrders.filter(o => o.status === false).length
    let cardPayments = 0, cashPayments = 0, totalSales = 0, totalCashPayments = 0, totalCardPayments = 0
    for (let order of element.orders) {
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

  /**
   * 
   */
  setReport() {
    this.getTransactions()
  }

}
