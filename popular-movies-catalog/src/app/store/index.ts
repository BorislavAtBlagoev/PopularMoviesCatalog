import { createReducer, on } from "@ngrx/store";
import { IMovie } from "../interfaces/movies";
import * as movieActions from './movie.actions';

export const movieStateFeatureKey = 'moviesState';

export interface IMoviesState {
    movies: IMovie[];
    error: any;
    isLoading: boolean;
}

export const initialState: IMoviesState = {
    movies: [],
    error: null,
    isLoading: false
}

export const reducers = createReducer(
    initialState,
    on(movieActions.LoadMovies, (state, action) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(movieActions.LoadMoviesSuccess, (state, action) => {
        return {
            ...state,
            isLoading: false,
            movies: action.movies,
        }
    }),
    on(movieActions.LoadMoviesFailure, (state, action) => {
        return {
            ...state,
            isLoading: false,
            error: action.error,
        }
    })
);