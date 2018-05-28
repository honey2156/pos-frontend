import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      alert("You are not logged in!");
      this.router.navigate(['login'])
      return false
    }
    return true
  }
}
