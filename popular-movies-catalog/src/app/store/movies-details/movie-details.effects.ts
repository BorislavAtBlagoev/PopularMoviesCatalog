import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { MoviesService } from "../../services/movies/movies.service";
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as movieDetailsActions from './movie-details.actions';
import { of } from "rxjs";

@Injectable()
export class MovieDetailsEffects {
    loadMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieDetailsActions.LoadMovie),
            switchMap(payload => this.moviesService.movie(payload.movieId)
                .pipe(
                    map(response => movieDetailsActions.LoadMovieSuccess({ movie: response })),
                    catchError(error => of(movieDetailsActions.LoadMovieFailure({ error }))
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ) { }
}