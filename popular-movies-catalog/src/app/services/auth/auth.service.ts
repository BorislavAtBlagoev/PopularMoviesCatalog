import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: IUser;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(user => {
      this.user = {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email
      }
      console.log(this.user);
    })
  }

  logInWithFirebaseAuth(providerName: string) {
    return this.angularFireAuth
      .signInWithPopup(this.getProvider(providerName))
      .catch(error => console.log(error));
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
}
