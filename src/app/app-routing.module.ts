import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth-guard.service';
import {UserResolver} from './user.resolver';


const routes: Routes = [
  {path: '', redirectTo: '/library', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule),
    canActivate: [AuthGuard],
    resolve: {username: UserResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class AppRoutingModule { }
