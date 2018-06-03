import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { Report } from '../../models/report';
import { LoginDataService } from '../../services/login-data.service';
import { ReportService } from '../../services/report.service';
import { CashDrawer } from '../../models/cash_drawer';
import { CashDrawerService } from '../../services/cash-drawer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser: Employee
  reports: Report[] = []
  drawer: CashDrawer = new CashDrawer()


  constructor(
    private loginDataService: LoginDataService,
    private route: Router,
    private reportService: ReportService,
    private cashDrawerService: CashDrawerService) {
    this.loggedUser = this.getLoginStatus()
  }

  ngOnInit() {
    this.setLoginStatus()
  }

  setLoginStatus() {
    this.loginDataService.currentLoggedUser
      .subscribe(user => {
        if (user && user.id) {
          this.loggedUser = user
        }
        else{
          this.loggedUser = this.getLoginStatus()
        }
      })
  }

  getLoginStatus() {
    if (JSON.parse(localStorage.getItem('loggedUser'))) {
      return JSON.parse(localStorage.getItem('loggedUser'))
    }
    else {
      return new Employee()
    }
  }

  confirmDrawer() {
    this.getCashDrawer()
  }

  getCashDrawer() {
    this.cashDrawerService.getEmployeeDrawer(this.loggedUser.id)
      .subscribe(drawer => {
        this.drawer = drawer
      })
  }

  logout() {
    this.loggedUser = new Employee()
    localStorage.clear()
    this.route.navigate(['login'])
  }

  downloadReport() {
    this.reportService.generateAndDownloadReport(this.loggedUser)
  }
}
