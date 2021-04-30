import { createReducer, on } from "@ngrx/store";
import { IPeople } from "src/app/interfaces/people";
import { IPeopleResponse } from "src/app/interfaces/responses";
import * as personActions from './person.actions';

export const peopleStateFeatureKey = 'peopleState';

export interface IPeopleState {
    people: IPeopleResponse;
    error: any;
    isLoading: boolean;
}

export const initialState: IPeopleState = {
    people: {
        total_pages: 0,
        page: 0,
        results: [],
        total_results: 0
    },
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