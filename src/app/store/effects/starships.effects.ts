import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShipsService } from '../../services/ships.service';
import * as StarshipsActions from '../actions/starships.action';
import { GetShipsPage } from '../actions/starships.action';

@Injectable()
export class ShipsEffects {
  loadShips$ = createEffect(() => this.actions$.pipe(
    ofType(StarshipsActions.GET_SHIPS)
    , mergeMap(() => this.shipsService.getAllStarships().pipe(
      map((response) => ({
        type: StarshipsActions.GET_SHIPS_SUCCESS,
        payload: response,
      })),
      catchError(() => of({ type: StarshipsActions.GET_SHIPS_ERROR }))
    ))));

  loadShipsPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarshipsActions.GET_SHIPS_PAGE),
      mergeMap((action: GetShipsPage) => {
        return this.shipsService.getPage(action.payload.page).pipe(
          map((shipsResponse) => ({
            type: StarshipsActions.GET_SHIPS_SUCCESS,
            payload: { shipsResponse, currentPage: action.payload.page },
          })),
          catchError(() => of({ type: StarshipsActions.GET_SHIPS_ERROR }))
        );
      })
    )
  );

  constructor(private actions$: Actions, private shipsService: ShipsService) { }
}
