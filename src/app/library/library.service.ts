import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  booksSubject = new Subject<any[]>();
  books = [];
  baseUrl = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }

  getBooks(query, start=0, end=10) {
    return this.http.get(`${this.baseUrl}?q=${query}&startIndex=${start}&maxResults=${end}`).toPromise().then(res => {
      this.books = res['items'].map(book => book['volumeInfo']);
      this.booksSubject.next(this.books);
    });
  }
}
