import { createAction, props } from "@ngrx/store";
import { IFilterSettings } from "src/app/interfaces/movies";
import { IPeople } from "src/app/interfaces/people";
import { IPeopleResponse } from "src/app/interfaces/responses";

export const LoadPeople = createAction(
    '[People List Component] Load People',
    props<{ filters: IFilterSettings }>()
);

export const LoadPeopleSuccess = createAction(
    '[People List Component] Load People Success',
    props<{ people: IPeopleResponse }>()
);

export const LoadPeopleFailure = createAction(
    '[People List Component] Load People Failure',
    props<{ error: any }>()
);