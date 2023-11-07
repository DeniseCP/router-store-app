import { Action, createFeature, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as alias from '../actions/test-container.action';

export interface State {
  // define state
  loading: boolean;
  loaded: boolean;
  error: any;
  testId: string;
};

export const initialState = {
  //set initial state
  loading: false,
  loaded: false,
  error: null,
  testId: 'ABC123',
};

const featureReducer = createReducer(
  initialState,
  on(alias.testActions.testAction1, state => ({ ...state, loading: true })),
  on(alias.testActions.testAction2, state => ({ ...state, loading: false })),
);
export function reducer(state: State, action: Action) {
  return featureReducer(state, action);
}

export const reducerState = createFeatureSelector<State>('testContainer');

export const selectTestId = createSelector(reducerState, (state: State) => state.testId);
