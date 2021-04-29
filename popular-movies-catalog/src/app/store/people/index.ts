import { createReducer, on } from "@ngrx/store";
import { IPeople } from "src/app/interfaces/people";
import * as personActions from './person.actions';

export const personStateFeatureKey = 'personState';

export interface IPeopleState {
    people: IPeople[];
    error: any;
    isLoading: boolean;
}

export const initialState: IPeopleState = {
    people: [],
    error: null,
    isLoading: false
}

export const reducers = createReducer(
    initialState,
    on(personActions.LoadPeople, (state, action) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(personActions.LoadPeopleSuccess, (state, action) => {
        return {
            ...state,
            isLoading: false,
            people: action.people,
        };
    }),
    on(personActions.LoadPeopleFailure, (state, action) => {
        return {
            ...state,
            isLoading: false,
            error: action.error,
        };
    })
);