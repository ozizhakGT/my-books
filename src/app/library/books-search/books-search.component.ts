import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {
  username: string;
  books: any[] = [];
  constructor(private libraryService: LibraryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.data['username'] || 'Anonymous';
    this.libraryService.booksSubject.subscribe(books => {
      this.books = books;
    });
  }

}
