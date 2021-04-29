import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITvShowsState, tvShowStateFeatureKey } from ".";

export const selectTvShowFeature = createFeatureSelector<ITvShowsState>(
    tvShowStateFeatureKey
);

export const selectTvShow = createSelector(
    selectTvShowFeature,
    (state: ITvShowsState) => state.tvShows,
);