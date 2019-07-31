import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibraryRoutingModule} from './library-routing.module';
import {LibraryComponent} from './library.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BooksSearchComponent} from './books-search/books-search.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    LibraryComponent,
    NavbarComponent,
    BooksSearchComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }
