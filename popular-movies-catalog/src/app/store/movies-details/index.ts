import { createReducer, on } from "@ngrx/store";
import { IMovie } from "src/app/interfaces/movies";
import * as movieDetailsAction from './movie-details.action';

export const movieDetailsStateFeatureKey = 'movieState';

export interface IMovieState {
    movie: IMovie;
    error: any;
    isLoading: boolean;
}

export const initialState: IMovieState = {
    movie: {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: null,
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    error: null,
    isLoading: false
}

export const reducers = createReducer(
    initialState,
    on(movieDetailsAction.LoadMovie, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(movieDetailsAction.LoadMovieSuccess, (state, action) => {
        return {
            ...state,
            movie: action.movie
        }
    }),
    on(movieDetailsAction.LoadMovieFailure, (state, action) => {
        return {
            ...state,
            error: action.error
        }
    }),
);
