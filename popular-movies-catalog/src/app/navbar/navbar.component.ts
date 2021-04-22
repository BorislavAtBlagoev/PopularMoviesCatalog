import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
  ]

  constructor() { }
}
