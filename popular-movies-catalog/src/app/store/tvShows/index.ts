import { createReducer, on } from "@ngrx/store";
import { ITvShow } from "src/app/interfaces/tvShows";
import * as tvShowActions from './tvShow.actions';

export const tvShowStateFeatureKey = 'tvShowState'

export interface ITvShowsState {
    tvShows: ITvShow[],
    error: any,
    isLoading: boolean
}

export const initialState: ITvShowsState = {
    tvShows: [],
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