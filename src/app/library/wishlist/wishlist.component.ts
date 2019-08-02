import {Component, OnDestroy, OnInit} from '@angular/core';
import {LibraryService} from '../library.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlist: any[] = [];
  bookSubscription: Subscription;
  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    /*
    * Register book Subject for getting new book
    * if isChosen false -> reutnr onDelete Function
    * else give book id and push it to wishlist Array.
    * */
    this.bookSubscription = this.libraryService.bookSubject.subscribe(book => {
      this.libraryService.notificationMessage(`${book['title']} ${book['isChosen'] ? 'Added' : 'Removed'} successfully`, 'success');
      if (!book['isChosen']) {
        return this.onDelete(book);
      }
      book['id'] = this.wishlist.length === 0 ? 1 : this.wishlist.length;
      return this.wishlist.push(book);
    });
  }
  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

  /*
  * Confirm with the client before deleting
  * Delete from Wishlist Array
  * */
  onDelete(book) {
    if (confirm(`Are you sure you want to remove ${book.title} from your wishlist?`)) {
      this.wishlist.splice(book['id'] - 1, 1);
    }
  }
}
