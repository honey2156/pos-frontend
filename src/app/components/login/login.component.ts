import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { LoginDataService } from '../../services/login-data.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: Employee

  constructor(
    private loginService: LoginService,
    private loginDataService: LoginDataService,
    private route: Router) { }

  ngOnInit() {
  }

  login(userLogin: NgForm) {
    let employee = new Employee()
    employee.username = userLogin.value.username
    employee.password = userLogin.value.password
    this.loginService.login(employee)
      .subscribe(employee => {
        if (employee && employee.id) {
          this.loggedUser = employee
          alert('logged successfully')
          localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser))
          this.loginDataService.updateLoggedUser(this.loggedUser)
          this.route.navigate(['cash-drawer'])
        }
        else {
          alert('invalid login credentials')
        }
      })
  }

}
