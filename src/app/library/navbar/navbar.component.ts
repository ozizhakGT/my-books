import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import {Subscription} from 'rxjs';

import {AuthService} from '../../login/auth.service';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('bookQuery', {static: true}) bookQuery: ElementRef;
  isLoading = false;
  typingSearchSubscription: Subscription;
  constructor(private libraryService: LibraryService, private authService: AuthService) { }

  ngOnInit() {
    /*
    * create new Observable and listen for keyup event in search books input.
    * will debounce 1 second after stop typing.
    * if value >= the 3 letters call Library service for get data;
    *  isLoading is spinner operator (decide appearing spinner or not)
    * */
    this.typingSearchSubscription = Observable.fromEvent(this.bookQuery.nativeElement, 'keyup')
          .debounceTime(1000)
          .subscribe(() => {
            const query = this.bookQuery.nativeElement.value;
            if (query.length >= 3) {
              this.isLoading = true;
              this.libraryService.getBooks(query).then(res => {
                this.isLoading = false;
              });
            }
          });
  }
  ngOnDestroy() {
    this.typingSearchSubscription.unsubscribe();
  }

  // Call auth service for logout
  onLogout() {
    this.authService.logout();
  }



}
