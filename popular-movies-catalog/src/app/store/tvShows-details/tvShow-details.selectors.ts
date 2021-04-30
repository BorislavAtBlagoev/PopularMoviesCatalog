import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITvShowState, tvShowDetailsStateFeatureKey } from ".";

export const selectTvShowFeature = createFeatureSelector<ITvShowState>(
    tvShowDetailsStateFeatureKey
);

export const selectTvShow = createSelector(
    selectTvShowFeature,
    (state: ITvShowState) => state.tvShow,
);