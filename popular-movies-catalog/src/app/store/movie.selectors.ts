import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMoviesState, movieStateFeatureKey } from ".";

export const selectmovieFeature = createFeatureSelector<IMoviesState>(
    movieStateFeatureKey
);

export const selectMovie = createSelector(
    selectmovieFeature,
    (state: IMoviesState) => state.movies,
);