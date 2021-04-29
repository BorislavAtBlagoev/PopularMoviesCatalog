import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPeopleState, personStateFeatureKey } from ".";


export const selectPersonFeature = createFeatureSelector<IPeopleState>(
    personStateFeatureKey
);

export const selectPerson = createSelector(
    selectPersonFeature,
    (state: IPeopleState) => state.people.results,
);

export const selectTotalPages = createSelector(
    selectPersonFeature,
    (state: IPeopleState) => state.people.total_pages
)