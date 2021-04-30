import { createReducer, on } from "@ngrx/store";
import { IPeople } from "src/app/interfaces/people";
import * as personDetailsActions from './person-details.actions';

export const personStateFeatureKey = 'personState';

export interface IPersonState {
    person: IPeople;
    error: any;
    isLoading: boolean;
};

export const initialState: IPersonState = {
    person: {
        popularity: 0,
        birthday: null,
        known_for_department: '',
        deathday: null,
        id: 0,
        name: '',
        also_known_as: [],
        gender: 0,
        biography: '',
        place_of_birth: null,
        profile_path: '',
        adult: false,
        imdb_id: '',
        homepage: null,
        known_for: [],
    },
    error: null,
    isLoading: false
};

export const reducers = createReducer(
    initialState,
    on(personDetailsActions.LoadPerson, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(personDetailsActions.LoadPersonSuccess, (state, action) => {
        return {
            ...state,
            person: action.person
        }
    }),
    on(personDetailsActions.LoadPersonFailure, (state, action) => {
        return {
            ...state,
            error: action.error
        }
    })
);