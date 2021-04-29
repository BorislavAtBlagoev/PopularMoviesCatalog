import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PeopleService } from '../../services/people/people.service';
import * as personActions from './person.actions';
import { of } from "rxjs";

@Injectable()
export class PersonEffects {
    loadPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(personActions.LoadPeople),
            mergeMap(payload => this.peopleService.people(payload.filters)
                .pipe(
                    map(response => personActions.LoadPeopleSuccess({ people: response.results })),
                    catchError(error => of(personActions.LoadPeopleFailure({ error })))
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private peopleService: PeopleService
    ) { }
}