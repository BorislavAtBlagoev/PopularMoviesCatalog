import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  //this will be in separate component in the future.
  logOut() {
    this.authService.logOut();
  }
}
