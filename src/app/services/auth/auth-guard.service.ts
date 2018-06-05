import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { LoginDataService } from '../login-data.service';
import { AuthService } from './auth.service';

/**
 * Authorization guard service
 */
@Injectable()
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router, private loginService: LoginDataService) { }

  /**
   * Checks if user is authorized to navigate to particular page. If not authorized, redirect to login page for authorization
   * 
   * @returns boolean
   */
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      alert("You are not logged in!");
      this.loginService.updateLoggedUser(new Employee())
      this.router.navigate(['login'])
      return false
    }
    return true
  }
}
