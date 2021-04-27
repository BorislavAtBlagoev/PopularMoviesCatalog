import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserCredentials } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from '../../../environments/environment';

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

  constructor(private authService: AuthService) { }

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
  }
}
