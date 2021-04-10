import { ShipsActions, SHIPS_LIST } from './actions/starships.action';

export interface AppState {
  ships: any;
}

export const initialState = {
  ships: {}
};

export function reducer(state: AppState = initialState, action: ShipsActions) {
  switch (action.type) {
    case SHIPS_LIST:
      return {
        ...state,
        ships: action.payload
      };

    default:
      return state;
  }
}
