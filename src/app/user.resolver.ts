import {Injectable} from '@angular/core';
import { Resolve} from '@angular/router';
import {AuthService} from './login/auth.service';
import {LibraryService} from './library/library.service';


@Injectable()
export class UserResolver implements Resolve<string> {
  constructor(private authService: AuthService, private libraryService: LibraryService) {}
  username = this.authService.getUserName();
  resolve() {
    this.libraryService.notificationMessage(`Welcome ${this.username}`, 'success');
    return this.username;
  }
}
