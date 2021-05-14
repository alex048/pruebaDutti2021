import { StarshipsState } from '../../models/Starships-state';
//import { StarshipsResponse } from '../../models/starships-response';
import { Action } from '@ngrx/store';

export const GET_SHIPS = '[SHIPS] get ships';
export const GET_SHIPS_SUCCESS = '[SHIPS] get ships success';
export const GET_SHIPS_ERROR = '[SHIPS] get ships error';
export const GET_SHIPS_PAGE = '[SHIPS] get ships page';

export class GetShips implements Action {
  readonly type = GET_SHIPS;
  constructor() { }
}

export class GetShipsSuccess implements Action {
  readonly type = GET_SHIPS_SUCCESS;
  constructor(public payload: StarshipsState) { }
}

export class GetShipsError implements Action {
  readonly type = GET_SHIPS_ERROR;
  constructor(public payload: string) { }
}

export class GetShipsPage implements Action {
  readonly type = GET_SHIPS_PAGE;
  constructor(public payload: { page: number }) { }
}

// Exportación de la acción
export type StarshipsActions =
  | GetShips
  | GetShipsPage
  | GetShipsSuccess
  | GetShipsError;
