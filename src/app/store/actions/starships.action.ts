import { Action } from '@ngrx/store';

export const SHIPS_LIST = '[Starships]';

export class ShipsList implements Action {
  readonly type = SHIPS_LIST;

  constructor(
    public payload: any
  ) { }
}

export type ShipsActions = ShipsList;
