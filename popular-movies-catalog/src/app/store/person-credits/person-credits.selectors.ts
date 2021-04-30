import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICombinedCreditsState, personCreditsStateFeatureKey, } from ".";

export const selectPersonFeature = createFeatureSelector<ICombinedCreditsState>(
    personCreditsStateFeatureKey
);

export const selectPersonCredits = createSelector(
    selectPersonFeature,
    (state: ICombinedCreditsState) => state
);

export const selectPersonCastCredits = createSelector(
    selectPersonFeature,
    (state: ICombinedCreditsState) => state.cast
);

export const selectPersonCrewCredits = createSelector(
    selectPersonFeature,
    (state: ICombinedCreditsState) => state.crew
);