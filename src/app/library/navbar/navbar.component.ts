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
  isLoading = false;
  constructor(private libraryService: LibraryService, private authService: AuthService) { }

  ngOnInit() {
    Observable.fromEvent(this.bookQuery.nativeElement, 'keyup')
          .debounceTime(1000)
          .subscribe(() => {
            const query = this.bookQuery.nativeElement.value;
            if (query.length >= 3) {
              this.isLoading = true;
              this.libraryService.getBooks(query).then(res => {
                this.isLoading = false;
              });
            } else {
            //  TODO: NOTIFICATION MESSEGE
            }
          });
  }

  onLogout() {
    this.authService.logout();
  }



}
