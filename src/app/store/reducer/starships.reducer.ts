import { StarshipsState } from '../../models/Starships-state';
import { StarshipsActions } from '../actions/starships.action';

// 1 - Importaciones
import * as ShipsActions from '../actions/starships.action';
import { StarshipsResponse } from '../../models/starships-response';

// 2 - Estado inicial
const initialState: StarshipsState = {
  currentPage: 0,
  shipsResponse: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

// 3 - Switch con las funciones puras
export function ShipsReducer(
  state: StarshipsState = initialState,
  action: StarshipsActions
) {
  switch (action.type) {
    case ShipsActions.GET_SHIPS:
      return state;
    case ShipsActions.GET_SHIPS_PAGE:
      return state;
    case ShipsActions.GET_SHIPS_ERROR:
      // NOTE esto se podría mostrar en un div en la página
      alert('Se ha producido un error en la carga');
      return state;
    case ShipsActions.GET_SHIPS_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}
