import { createAction, props } from "@ngrx/store";
import { IPeople } from "src/app/interfaces/people";

export const LoadPerson = createAction(
    '[People Details Component] Load People',
    props<{ personId: number }>()
);

export const LoadPersonSuccess = createAction(
    '[People Details Component] Load People Success',
    props<{ person: IPeople }>()
);

export const LoadPersonFailure = createAction(
    '[People Details Component] Load People Failure',
    props<{ error: any }>()
);