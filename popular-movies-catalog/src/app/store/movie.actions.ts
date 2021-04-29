import { createAction, props } from "@ngrx/store";
import { IFilterSettings, IMovie } from "../interfaces/movies";

export const LoadMovies = createAction(
    '[Movies List Component] Load Movies',
    props<{ filters: IFilterSettings }>()
);

export const LoadMoviesSuccess = createAction(
    '[Movies List Component] Load Movies Success',
    props<{ movies: IMovie[] }>()
);

export const LoadMoviesFailure = createAction(
    '[Movies List Component] Load Movies Failure',
    props<{ error: any }>()
);