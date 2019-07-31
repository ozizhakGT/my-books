import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isValidUser = false;
  username: string;
  constructor() { }

  getUserName() {
    return this.username;
  }
  // Return boolean for the Guard;
  isAuthenticated() {
    return this.isValidUser;
  }
  /*
  * isValidUser operator will change by authentication form value;
  * */
  login(valid=false, username) {
      this.username = username;
      this.isValidUser = valid;
  }
}
