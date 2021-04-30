import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPeopleState, peopleStateFeatureKey } from ".";


export const selectPeopleFeature = createFeatureSelector<IPeopleState>(
    peopleStateFeatureKey
);

export const selectPeople = createSelector(
    selectPeopleFeature,
    (state: IPeopleState) => state.people.results,
);

export const selectTotalPages = createSelector(
    selectPeopleFeature,
    (state: IPeopleState) => state.people.total_pages
);