import { createAction, props } from "@ngrx/store";
import { IMovie } from "src/app/interfaces/movies";

export const LoadMovie = createAction(
    '[Movie Details Component] Load Movie',
    props<{ movieId: number }>()
);

export const LoadMovieSuccess = createAction(
    '[Movie Details Component] Load Movie Success',
    props<{ movie: IMovie }>()
);

export const LoadMovieFailure = createAction(
    '[Movie Details Component] Load Movie Failure',
    props<{ error: any }>()
);