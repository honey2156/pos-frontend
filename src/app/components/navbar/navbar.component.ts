import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { LoginDataService } from '../../services/login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser: Employee

  constructor(private loginDataService: LoginDataService, private route: Router) {
    this.loggedUser = new Employee()
  }

  ngOnInit() {
    this.setLoginStatus()
    this.getLoginStatus()
  }

  setLoginStatus() {
    this.loginDataService.currentLoggedUser
      .subscribe(user => {
        if (user && user.id) {
          this.loggedUser = user
        }
      })
  }

  getLoginStatus() {
    console.log(localStorage.getItem('loggedUser'))
  }

  logout() {
    this.loggedUser = new Employee()
    localStorage.clear()
    this.route.navigate(['login'])
  }
}
