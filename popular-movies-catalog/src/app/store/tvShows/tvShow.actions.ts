import { createAction, props } from "@ngrx/store";
import { ITvShow, ITvShowsFilterSettings } from "src/app/interfaces/tvShows";

export const LoadTvShows = createAction(
    '[TvShows List Component] Load TvShows',
    props<{ filters: ITvShowsFilterSettings }>()
);

export const LoadTvShowsSuccess = createAction(
    '[TvShows List Component] Load TvShows Success',
    props<{ tvShows: ITvShow[] }>()
);

export const LoadTvShowsFailure = createAction(
    '[TvShows List Component] Load TvShows Failure',
    props<{ error: any }>()
);