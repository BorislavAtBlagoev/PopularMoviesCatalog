import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMoviesState, movieStateFeatureKey } from ".";

export const selectMovieFeature = createFeatureSelector<IMoviesState>(
    movieStateFeatureKey
);

export const selectMovies = createSelector(
    selectMovieFeature,
    (state: IMoviesState) => state.movies.results,
);

export const selectTotalPages = createSelector(
    selectMovieFeature,
    (state: IMoviesState) => state.movies.total_pages,
);