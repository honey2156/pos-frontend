import { Injectable } from '@angular/core';

/**
 * Authentication Service
 */
@Injectable()
export class AuthService {

  constructor() { }

  /**
   * Checks if user is logged or not
   * @returns boolean
   */
  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('loggedUser'))

    return token !== null
  }
}
