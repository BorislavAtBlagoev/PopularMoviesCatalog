import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PeopleService } from '../../services/people/people.service';
import * as personCreditsActions from './person-credits.actions';
import { of } from "rxjs";

@Injectable()
export class PersonCreditsEffects {
    loadPerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(personCreditsActions.LoadPersonCredits),
            mergeMap(payload => this.peopleService.personCredits(payload.personId)
                .pipe(
                    map(response => personCreditsActions.LoadPersonCreditsSuccess({
                        id: response.id,
                        cast: response.cast,
                        crew: response.crew
                    })),
                    catchError(error => of(personCreditsActions.LoadPersonCreditsFailure({ error })))
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private peopleService: PeopleService
    ) { }
}