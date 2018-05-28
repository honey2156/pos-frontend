import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('loggedUser'))

    return token !== null
  }
}
