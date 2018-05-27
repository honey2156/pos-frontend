import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Employee } from '../models/employee';

@Injectable()
export class LoginDataService {

  loggedUserSource = new BehaviorSubject<Employee>(new Employee())
  currentLoggedUser = this.loggedUserSource.asObservable()

  constructor() { }

  updateLoggedUser(user: Employee) {
    this.loggedUserSource.next(user)
  }
}
