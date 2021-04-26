import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
// import { AppComponent } from '../app.component';

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
  ];
  // navbarAuthItems = [
  //   {
  //     //I set empty string for now.
  //     path: '',
  //     title: 'Log In',
  //     function: this.loginWithPopup
  //   },
  //   {
  //     //I set empty string for now.
  //     path: '',
  //     title: 'Log Out',
  //     function: this.logOut
  //   }
  // ]

  constructor(private authService: AuthService) { }

  //this will be in separate component in the future.
  logInWithPopup() {
    this.authService.logInWithFirebaseAuth('google');
  }

  //this will be in separate component in the future.
  logOut() {
    this.authService.logOut();
  }
}
