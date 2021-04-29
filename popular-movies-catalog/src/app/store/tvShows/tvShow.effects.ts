import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { TvShowsService } from "src/app/services/tv-shows/tv-shows.service";
import * as tvShowActions from '../tvShows/tvShow.actions';

@Injectable()
export class TvShowEffects {
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(tvShowActions.LoadTvShows),
            mergeMap(payload => this.tvShowsService.tvShows(payload.filters)
                .pipe(
                    map(response => tvShowActions.LoadTvShowsSuccess({ tvShows: response.results })),
                    catchError(error => of(tvShowActions.LoadTvShowsFailure({ error }))
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private tvShowsService: TvShowsService
    ) { }
}