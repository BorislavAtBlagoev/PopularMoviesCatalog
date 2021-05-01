import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/interfaces/auth";
import * as authActions from './auth.actions';

export const authStateFeatureKey = 'authState';

export interface IAuthState {
    user: IUser,
    error: any,
    isLoading: boolean
};


export const initialState: IAuthState = {
    user: {
        uid: undefined,
        displayName: undefined,
        email: undefined,
        photoURL: undefined,
    },
    error: null,
    isLoading: false
};

export const reducers = createReducer(
    initialState,
    on(authActions.getUser, (state, action) => {
        return {
            ...state,
        }
    }),
    on(authActions.loginWithFirebaseAuth, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(authActions.getUserFailure, (state, action) => {
        return {
            ...state
        }
    }),
    on(authActions.authenticateSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(authActions.authenticateFailure, (state, action) => {
        return {
            ...state,
            error: action.error
        }
    })
)