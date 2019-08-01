import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  booksSubject = new Subject<any[]>();
  bookSubject = new Subject<{}>();
  books = [];
  baseUrl = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient, private notify: MatSnackBar) { }

  /*
  * get Request for searching books by search input (navbar component)
  * save books in service only details I use!
  * send new update for books subscribers
  * on catch case will notify client error
  * */
  getBooks(query, start=0, end=40) {
    return this.http.get(`${this.baseUrl}?q=${query}&startIndex=${start}&maxResults=${end}`).toPromise().then(res => {
      this.books = res['items'].map(book => book['volumeInfo']);
      this.booksSubject.next(this.books);
      return true;
    })
      .catch(() => {
        this.notificationMessage(`There's was some problem get books for ${query}, please try again`, 'failed');

      });
  }

  // notification system
  notificationMessage(message, type) {
    this.notify.open(message,null, {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: type
    });
  }
}
