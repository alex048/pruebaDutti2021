import { StarshipsState } from '../../models/Starships-state';
//import { StarshipsResponse } from '../../models/starships-response';
import { Action } from '@ngrx/store';

export const GET_STARSHIPS = '[SHIPS] get ships';
export const GET_STARSHIPS_SUCCESS = '[SHIPS] get ships success';
export const GET_STARSHIPS_FAIL = '[SHIPS] get ships error';
export const GET_STARSHIPS_PAGE = '[SHIPS] get ships page';

export class GetShips implements Action {
  readonly type = GET_STARSHIPS;
  constructor() { }
}

export class GetShipsSuccess implements Action {
  readonly type = GET_STARSHIPS_SUCCESS;
  constructor(public payload: StarshipsState) { }
}

export class GetShipsError implements Action {
  readonly type = GET_STARSHIPS_FAIL;
  constructor(public payload: string) { }
}

export class GetShipsPage implements Action {
  readonly type = GET_STARSHIPS_PAGE;
  constructor(public payload: { page: number }) { }
}

// Exportación de la acción
export type StarshipsActions =
  | GetShips
  | GetShipsPage
  | GetShipsSuccess
  | GetShipsError;
