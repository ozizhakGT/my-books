import {Component, Inject, OnInit} from '@angular/core';
import {LibraryService} from '../library.service';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {
  username: string;
  books: any[] = [];
  p: number = 1;
  constructor(private libraryService: LibraryService,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.username = this.route.snapshot.data['username'] || 'Anonymous';
    this.libraryService.booksSubject.subscribe(books => {
      this.books = books;
      console.log(this.books);
    });
  }

  openBookModal(book): void {
    const dialogRef = this.dialog.open(BookDetailsModal, {
      width: '55rem',
      data: book
    })
  }
}

// MODAL COMPONENT
@Component({
  selector: 'book-details-modal',
  styleUrls: ['./books-search.component.scss'],
  templateUrl: 'book-details-modal.html'
})
export class BookDetailsModal {
  constructor(public dialog: MatDialogRef<BookDetailsModal>, @Inject(MAT_DIALOG_DATA) public book: DialogData) {}

  onClose(): void {
    this.dialog.close();
  }
  detectNumbersOfAuthors(authors) {
    console.log(authors)
  }
}
