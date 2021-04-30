import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PeopleService } from '../../services/people/people.service';
import * as personDetailsActions from './person-details.actions';
import { of } from "rxjs";

@Injectable()
export class PersonDetailsEffects {
    loadPerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(personDetailsActions.LoadPerson),
            mergeMap(payload => this.peopleService.person(payload.personId)
                .pipe(
                    map(response => personDetailsActions.LoadPersonSuccess({ person: response })),
                    catchError(error => of(personDetailsActions.LoadPersonFailure({ error })))
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private peopleService: PeopleService
    ) { }
}