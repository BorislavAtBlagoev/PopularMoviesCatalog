import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { IUser, IUserCredentials } from 'src/app/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: IUser;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.angularFireAuth.authState.subscribe(user => {
      this.user = {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email
      }
      console.log(this.user);
    })
  }

  logInWithFirebasePopup(providerName: string) {
    return this.angularFireAuth
      .signInWithPopup(this.getProvider(providerName))
      .then(() => this.redirectToMovie())
      .catch(error => console.log(error));
  }

  loginWithFirebaseEmailAndPassword(userCredentials: IUserCredentials, callback: (error?: any) => void) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then(() => this.redirectToMovie())
      .catch(error => callback(error));
  }

  registrationWithFirebaseEmailAndPassword(userCredentials: IUserCredentials, callback: (error?: any) => void) {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then(() => callback())
      .catch(error => callback(error));
  }

  logOut() {
    this.angularFireAuth
      .signOut()
      .catch(error => console.error(error));
  }

  private getProvider(providerName: string) {
    if (providerName === 'google') {
      return new firebase.auth.GoogleAuthProvider();
    } else {
      return new firebase.auth.FacebookAuthProvider();
    }
  }

  private redirectToMovie() {
    this.router.navigate(['/movies']);
  }
}
