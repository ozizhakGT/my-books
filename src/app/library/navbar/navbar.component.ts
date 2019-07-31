import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {LibraryService} from '../library.service';
import {AuthService} from '../../login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('bookQuery', {static: true}) bookQuery: ElementRef;
  constructor(private libraryService: LibraryService, private authService: AuthService) { }

  ngOnInit() {
    Observable.fromEvent(this.bookQuery.nativeElement, 'keyup')
          .debounceTime(1800)
          .subscribe(() => {
            const query = this.bookQuery.nativeElement.value;
            if (query.length >= 3) {
              this.libraryService.getBooks(query,10)
            } else {
            //  TODO: NOTIFICATION MESSEGE
            }
          });
  }

  onLogout() {
    this.authService.logout();
  }



}
