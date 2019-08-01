import {Injectable} from '@angular/core';
import { Resolve} from '@angular/router';
import {AuthService} from './login/auth.service';


@Injectable()
export class UserResolver implements Resolve<string> {
  constructor(private authService: AuthService) {}
  resolve() {
    return this.authService.getUserName();
  }
}
