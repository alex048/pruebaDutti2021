import * as fromStarshipsReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    customers: fromStarshipsReducer.StarshipsState;
}

export const reducers = {
    customers: fromStarshipsReducer.reducer
};

export const getState = (state) => state;

export const getStateStarshipsState = createFeatureSelector<fromStarshipsReducer.StarshipsState>('starships');
export const getStarships = createSelector(getStateStarshipsState, fromStarshipsReducer.getStarships);


