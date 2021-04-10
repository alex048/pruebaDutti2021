import * as fromStarshipsActions from '../actions/starships.action';
import { Starships } from 'src/app/models/starships.module';

export interface StarshipsState {
    data: Starships[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: StarshipsState = {
    data: [],
    loaded: false,
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: fromStarshipsActions.StarshipsActions) {
    switch (action.type) {
      case fromStarshipsActions.LOAD_STARSHIPS: {
          return {
              ...state,
              loading: true,
          };
      }

      case fromStarshipsActions.LOAD_STARSHIPS_SUCCESS: {
        const data = action.payLoad;
        return {
          ...state,
          loading: false,
          loaded: true,
          data
        };
      }

      case fromStarshipsActions.LOAD_STARSHIPS_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false,
          error: action.payLoad
        };
      }     

  

      default: {
          return state;
      }
    }
}

export const getStarships = (state: StarshipsState) => state.data;
export const getStarshipsLoaded = (state: StarshipsState) => state.loaded;
export const getStarshipsLoading = (state: StarshipsState) => state.loading;
export const getStarshipssError = (state: StarshipsState) => state.error;
