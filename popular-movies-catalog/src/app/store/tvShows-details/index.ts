import { createReducer, on } from "@ngrx/store";
import { ITvShow } from "src/app/interfaces/tvShows";
import * as tvShowDetailsActions from './tvShow-details.actions';

export const tvShowDetailsStateFeatureKey = 'tvShowState';

export interface ITvShowState {
    tvShow: ITvShow,
    error: any;
    isLoading: boolean
}

export const initialState: ITvShowState = {
    tvShow: {
        poster_path: null,
        popularity: 0,
        id: 0,
        name: '',
        backdrop_path: null,
        vote_average: 0,
        overview: '',
        first_air_date: '',
        origin_country: [],
        genre_ids: [],
        original_language: '',
        vote_count: 0,
        original_name: '',
    },
    error: null,
    isLoading: false
}

export const reducers = createReducer(
    initialState,
    on(tvShowDetailsActions.LoadTvShow, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(tvShowDetailsActions.LoadTvShowSuccess, (state, action) => {
        return {
            ...state,
            tvShow: action.tvShow
        }
    }),
    on(tvShowDetailsActions.LoadTvShowFailure, (state, action) => {
        return {
            ...state,
            error: action.error
        }
    })
);