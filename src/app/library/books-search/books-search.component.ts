import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.booksSubject.subscribe(books => {
      console.log(books);
    })
  }

}
