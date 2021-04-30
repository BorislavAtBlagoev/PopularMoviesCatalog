import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMovieState, movieDetailsStateFeatureKey } from ".";

export const selectMovieFeature = createFeatureSelector<IMovieState>(
    movieDetailsStateFeatureKey
);

export const selectMovie = createSelector(
    selectMovieFeature,
    (state: IMovieState) => state.movie
);