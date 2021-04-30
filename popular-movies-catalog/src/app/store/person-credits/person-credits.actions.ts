import { createAction, props } from "@ngrx/store";
import { IPersonCredits } from "src/app/interfaces/people";
import { ICombinedCreditsResponse } from "src/app/interfaces/responses";

export const LoadPersonCredits = createAction(
    '[People Details Component] Load People Credits',
    props<{ personId: number }>()
);

export const LoadPersonCreditsSuccess = createAction(
    '[People Details Component] Load People Credits Success',
    props<{ id: number, cast: IPersonCredits[], crew: IPersonCredits[] }>()
);

export const LoadPersonCreditsFailure = createAction(
    '[People Details Component] Load People Credits Failure',
    props<{ error: any }>()
);