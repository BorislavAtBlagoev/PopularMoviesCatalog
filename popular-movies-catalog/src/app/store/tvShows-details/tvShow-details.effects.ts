import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { TvShowsService } from "src/app/services/tv-shows/tv-shows.service";
import * as tvShowDetailsActions from '../tvShows-details/tvShow-details.actions';

@Injectable()
export class TvShowDetailsEffects {
    loadTvShow$ = createEffect(() =>
        this.actions$.pipe(
            ofType(tvShowDetailsActions.LoadTvShow),
            mergeMap(payload => this.tvShowsService.tvShow(payload.tvShowId)
                .pipe(
                    map(response => tvShowDetailsActions.LoadTvShowSuccess({ tvShow: response })),
                    catchError(error => of(tvShowDetailsActions.LoadTvShowFailure({ error }))
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