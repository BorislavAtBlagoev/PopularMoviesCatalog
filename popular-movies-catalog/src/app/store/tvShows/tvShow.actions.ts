import { createAction, props } from "@ngrx/store";
import { ITvShowsResponse } from "src/app/interfaces/responses";
import { ITvShow, ITvShowsFilterSettings } from "src/app/interfaces/tvShows";

export const LoadTvShows = createAction(
    '[TvShows List Component] Load TvShows',
    props<{ filters: ITvShowsFilterSettings }>()
);

export const LoadTvShowsSuccess = createAction(
    '[TvShows List Component] Load TvShows Success',
    props<{ tvShows: ITvShowsResponse }>()
);

export const LoadTvShowsFailure = createAction(
    '[TvShows List Component] Load TvShows Failure',
    props<{ error: any }>()
);