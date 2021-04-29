import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { MoviesService } from "../services/movies/movies.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as movieActions from './movie.actions';
import { of } from "rxjs";

@Injectable()
export class MovieEffects {
    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.LoadMovies),
            mergeMap(payload => this.moviesService.discover(payload.filters)
                .pipe(
                    map(response => movieActions.LoadMoviesSuccess({ movies: response.results })),
                    catchError(error => of(movieActions.LoadMoviesFailure({ error }))
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