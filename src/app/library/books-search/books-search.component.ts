import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {LibraryService} from '../library.service';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit, OnDestroy {
  username: string;
  books: any[] = [];
  p: number = 1;
  bookSubscription: Subscription;
  constructor(private libraryService: LibraryService,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    // get username from route (Resolver)
    this.username = this.route.snapshot.data['username'] || 'Anonymous';
    // subscribe books Subject and listen to new search
    this.bookSubscription = this.libraryService.booksSubject.subscribe(books => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

  // Open modal Function
  openBookModal(book): void {
    console.log(book)
    const dialogRef = this.dialog.open(BookDetailsModal, {
      width: '55rem',
      data: book
    });
  }
}

// MODAL COMPONENT
@Component({
  selector: 'book-details-modal',
  styleUrls: ['./books-search.component.scss'],
  templateUrl: 'book-details-modal.html'
})
export class BookDetailsModal {
  constructor(public dialog: MatDialogRef<BookDetailsModal>,
              @Inject(MAT_DIALOG_DATA) public book: {},
              private libraryService: LibraryService) {}

  // toggle isChosen propery and update subject
  onToggle(book) {
    book['isChosen'] = !book['isChosen'];
    this.libraryService.bookSubject.next(book);
  }
}
