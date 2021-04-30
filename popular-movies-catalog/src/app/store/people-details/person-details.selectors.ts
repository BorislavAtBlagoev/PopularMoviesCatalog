import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPersonState, personStateFeatureKey } from ".";

export const selectPersonFeature = createFeatureSelector<IPersonState>(
    personStateFeatureKey
);

export const selectPerson = createSelector(
    selectPersonFeature,
    (state: IPersonState) => state.person
);