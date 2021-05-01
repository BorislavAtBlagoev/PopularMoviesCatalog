import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/interfaces/auth";

export const getUser = createAction(
    '[Auth Effect] Get User'
);

export const getUserFailure = createAction(
    '[Auth Effect] Get User Failure',
    props<{ user: IUser }>()
);

export const loginWithFirebaseAuth = createAction(
    '[Auth Component] Authenticate',
    props<{ provider?: string }>()
);

export const authenticateSuccess = createAction(
    '[Auth Component] Authenticate Success',
    props<{ user: IUser }>()
);

export const authenticateFailure = createAction(
    '[Auth Component] Authenticate Failure',
    props<{ error: any }>()
);