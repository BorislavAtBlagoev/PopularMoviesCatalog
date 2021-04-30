import { createReducer, on } from "@ngrx/store";
import { IDiscoverResponse } from "src/app/interfaces/responses";
import { IMovie } from "../../interfaces/movies";
import * as movieActions from './movie.actions';

export const movieStateFeatureKey = 'moviesState';

export interface IMoviesState {
    movies: IDiscoverResponse;
    error: any;
    isLoading: boolean;
}

export const initialState: IMoviesState = {
    movies: {
        page: 0,
        results: [],
        total_results: 0,
        total_pages: 0
    },
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