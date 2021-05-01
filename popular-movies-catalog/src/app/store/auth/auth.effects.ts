import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { catchError, map, switchMap } from 'rxjs/operators';
import * as authActions from './auth.actions';
import { of } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { IUser } from "src/app/interfaces/auth";

@Injectable()
export class AuthEffects {
    getUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.getUser),
            switchMap(payload => this.angularFireAuth.authState
                .pipe(
                    map(response => {
                        if (response) {
                            const { uid, displayName, email, photoURL } = response;
                            return authActions.authenticateSuccess({ user: { uid, displayName, email, photoURL } });
                        } else {
                            const user: IUser = {
                                uid: undefined,
                                displayName: undefined,
                                email: undefined,
                                photoURL: undefined
                            };

                            return authActions.getUserFailure({ user: user });
                        }
                    }),
                    catchError(error => of(authActions.authenticateFailure({ error })))
                )
            )
        )
    )

    // logInWithProvider$ = createEffect(() =>
    // this.actions$.pipe(
    //     ofType(authActions.loginWithFirebaseAuth),
    //     switchMap(payload => this.angularFireAuth.authState
    //         .pipe(
    //             map(response => {
    //                 if (response) {
    //                     const { uid, displayName, email, photoURL } = response;
    //                     return authActions.authenticateSuccess({ user: { uid, displayName, email, photoURL } });
    //                 } else {
    //                     return authActions.getUserFailure();
    //                 }
    //             }),
    //             catchError(error => of(authActions.authenticateFailure({ error })))
    //         )
    //     )
    // )
    // )

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private angularFireAuth: AngularFireAuth
    ) { }
}