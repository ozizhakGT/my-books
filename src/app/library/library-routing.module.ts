import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LibraryComponent} from './library.component';

const libraryRoutes: Routes = [
  {path: '', children: [
      {path: '', component: LibraryComponent},
      {path: ':book', component: LibraryComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(libraryRoutes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
