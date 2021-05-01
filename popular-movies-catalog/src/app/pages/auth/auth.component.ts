import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser, IUserCredentials } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IAuthState } from 'src/app/store/auth';
import { selectUser } from 'src/app/store/auth/auth.selectors';
import { environment } from '../../../environments/environment';
import * as authActions from '../../store/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authChoice: string = 'login';
  loginForm!: FormGroup;
  registrationFrom!: FormGroup;
  loginFormError: string = '';
  registrationFormError: string = '';
  user$: Observable<IUser>;

  constructor(
    private authService: AuthService,
    private store: Store<IAuthState>
    ) { }

  logInWithGoogle() {
    this.authService.logInWithFirebasePopup('google');
  }

  logInWithFacebook() {
    this.authService.logInWithFirebasePopup('facebook');
  }

  onSubmitLoginForm() {
    const userCredentials: IUserCredentials = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };

    this.authService
      .loginWithFirebaseEmailAndPassword(userCredentials, (error) => {
        this.loginFormError = error;
      });
  }

  onSubmitRegistrationForm() {
    const userCredentials: IUserCredentials = {
      email: this.registrationFrom.get('email')?.value,
      password: this.registrationFrom.get('password')?.value
    };

    this.authService
      .registrationWithFirebaseEmailAndPassword(userCredentials, (error) => {
        this.registrationFormError = error;

        if (!this.registrationFormError) {
          this.authChoice = 'login';
        }
      })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(environment.AUTH.PASSWORD_MIN_LENGTH)
      ])
    });

    this.registrationFrom = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(environment.AUTH.PASSWORD_MIN_LENGTH)
      ])
    });

    this.store.dispatch(authActions.getUser());
    this.user$ = this.store.pipe(select(selectUser));
    console.log(this.user$);
  }
}
