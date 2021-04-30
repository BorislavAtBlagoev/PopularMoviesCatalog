import { createReducer, on } from "@ngrx/store";
import { IPersonCredits } from "src/app/interfaces/people";
import * as personCreditsActions from './person-credits.actions';

export const personCreditsStateFeatureKey = 'personCreditsState';

export interface ICombinedCreditsState {
    id: number;
    cast: IPersonCredits[];
    crew: IPersonCredits[];
    error: any;
    isLoading: boolean;
};

export const initialState: ICombinedCreditsState = {
    id: 0,
    cast: [],
    crew: [],
    error: null,
    isLoading: false
};

export const reducers = createReducer(
    initialState,
    on(personCreditsActions.LoadPersonCredits, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(personCreditsActions.LoadPersonCreditsSuccess, (state, action) => {
        return {
            ...state,
            id: action.id,
            cast: action.cast,
            crew: action.crew
        }
    }),
    on(personCreditsActions.LoadPersonCreditsFailure, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
)