import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/auth';
import { AuthService } from '../services/auth/auth.service';
import { IAuthState } from '../store/auth';
import * as authActions from '../store/auth/auth.actions';
import { selectUser } from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user: IUser;
  isAuthenticated: boolean;
  user$: Observable<IUser>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<IAuthState>
  ) { }

  canActivate(): boolean {
    this.store.dispatch(authActions.getUser());
    const user$ = this.store.pipe(select(selectUser));

    user$.subscribe(user => this.user = user);

    if (this.user) {
      return true
    } else {
      return false
    }
  }
}
