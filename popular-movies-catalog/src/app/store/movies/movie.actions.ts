import { createAction, props } from "@ngrx/store";
import { IDiscoverResponse } from "src/app/interfaces/responses";
import { IFilterSettings, IMovie } from "../../interfaces/movies";

export const LoadMovies = createAction(
    '[Movies List Component] Load Movies',
    props<{ filters: IFilterSettings }>()
);

export const LoadMoviesSuccess = createAction(
    '[Movies List Component] Load Movies Success',
    props<{ movies: IDiscoverResponse }>()
);

export const LoadMoviesFailure = createAction(
    '[Movies List Component] Load Movies Failure',
    props<{ error: any }>()
);