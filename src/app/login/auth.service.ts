import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isValidUser = false;
  constructor() { }
  // Return boolean for the Guard;
  isAuthenticated() {
    return this.isValidUser;
  }
  /*
  * isValidUser operator will change by authentication form value;
  * */
  login(valid=false) {
    this.isValidUser = valid;
  }
}
