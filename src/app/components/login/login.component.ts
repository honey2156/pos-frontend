import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
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
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ][a-zA-Z0-9]*')]),
    password: new FormControl('', Validators.required)
  })
  isUserValid = true

  constructor(
    private loginService: LoginService,
    private loginDataService: LoginDataService,
    private route: Router) { }

  ngOnInit() {
  }

  login() {
    let employee = new Employee()
    employee.username = this.loginForm.get('username').value
    employee.password = this.loginForm.get('password').value
    this.loginService.login(employee)
      .subscribe(employee => {
        if (employee && employee.id) {
          this.loggedUser = employee
          alert('loggedin successfully')
          localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser))
          this.loginDataService.updateLoggedUser(this.loggedUser)
          this.route.navigate(['cash-drawer'])
        }
        else {
          this.isUserValid = false
        }
      })
  }

}
