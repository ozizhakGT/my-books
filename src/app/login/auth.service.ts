import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isValidUser = false;
  username: string;
  constructor(private router: Router) { }

  // return current username
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
      this.router.navigate(['library']);
  }
  /*
  * change isValidUser to true and navidate to login route.
  * after that guard will protect user validation
  * */
  logout() {
    this.isValidUser = false;
    this.router.navigate(['login']);
  }
}
