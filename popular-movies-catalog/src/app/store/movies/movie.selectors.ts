import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMoviesState, movieStateFeatureKey } from ".";

export const selectMovieFeature = createFeatureSelector<IMoviesState>(
    movieStateFeatureKey
);

export const selectMovie = createSelector(
    selectMovieFeature,
    (state: IMoviesState) => state.movies,
);