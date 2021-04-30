import { createReducer, on } from "@ngrx/store";
import { ITvShowsResponse } from "src/app/interfaces/responses";
import { ITvShow } from "src/app/interfaces/tvShows";
import * as tvShowActions from './tvShow.actions';

export const tvShowStateFeatureKey = 'tvShowsState'

export interface ITvShowsState {
    tvShows: ITvShowsResponse,
    error: any,
    isLoading: boolean
}

export const initialState: ITvShowsState = {
    tvShows: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    error: null,
    isLoading: false
}

export const reducers = createReducer(
    initialState,
    on(tvShowActions.LoadTvShows, (state, action) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(tvShowActions.LoadTvShowsSuccess, (state, action) => {
        return {
            ...state,
            tvShows: action.tvShows,
        }
    }),
    on(tvShowActions.LoadTvShowsFailure, (state, action) => {
        return {
            ...state,
            error: action.error,
        }
    })
);