import { createAction, props } from "@ngrx/store";
import { ITvShow } from "src/app/interfaces/tvShows";

export const LoadTvShow = createAction(
    '[TvShow Details Component] Load TvShow',
    props<{ tvShowId: number }>()
);

export const LoadTvShowSuccess = createAction(
    '[TvShow Details Component] Load TvShow Success',
    props<{ tvShow: ITvShow }>()
);

export const LoadTvShowFailure = createAction(
    '[TvShow Details Component] Load TvShow Failure',
    props<{ error: any }>()
);