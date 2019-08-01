import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibraryRoutingModule} from './library-routing.module';
import {LibraryComponent} from './library.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BookDetailsModal, BooksSearchComponent} from './books-search/books-search.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {SharedModule} from '../shared/shared.module';
import { BookComponent } from './books-search/book/book.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    LibraryComponent,
    NavbarComponent,
    BooksSearchComponent,
    WishlistComponent,
    BookComponent,
    BookDetailsModal
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  entryComponents: [BookDetailsModal]
})
export class LibraryModule { }
