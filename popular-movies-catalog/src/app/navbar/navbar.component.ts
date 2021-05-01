import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/auth';
import { AuthService } from '../services/auth/auth.service';
import { IAuthState } from '../store/auth';
import * as authActions from '../store/auth/auth.actions';
import { selectUser } from '../store/auth/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: IUser;
  user$: Observable<IUser>
  navbarItems = [
    {
      path: '/movies',
      title: 'Movies'
    },
    {
      path: '/tv-shows',
      title: 'TV-Shows'
    },
    {
      path: '/people',
      title: 'People'
    }
  ];

  constructor(
    private authService: AuthService,
    private store: Store<IAuthState>,
  ) { }

  ngOnInit(): void {
    this.authService
      .user$
      .subscribe(user => this.user = user);
  }

  //this will be in separate component in the future.
  logOut() {
    this.authService.logOut();
  }
}
