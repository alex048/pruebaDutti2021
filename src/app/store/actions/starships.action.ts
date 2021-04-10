import { Action } from '@ngrx/store';
import { Starships } from '../../models/starships.module';
export const LOAD_STARSHIPS = '[Starships] Load starships';
export const LOAD_STARSHIPS_SUCCESS = '[Starships] Load starships success';
export const LOAD_STARSHIPS_FAIL = '[Starships] Load starships fail';

export class loadStarships implements Action {
  readonly type = LOAD_STARSHIPS;
}

export class LoadStarshipsSucess implements Action {
  readonly type = LOAD_STARSHIPS_SUCCESS;

  constructor(public payLoad: Starships[]) {
  }
}

export class LoadStarshipsFail implements Action {
  readonly type = LOAD_STARSHIPS_FAIL;

  constructor(public payLoad: any) {
  }
}

export type StarshipsActions = loadStarships | LoadStarshipsSucess | LoadStarshipsFail;
