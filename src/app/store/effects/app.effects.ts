
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromStarshipsActions from '../actions/starships.action';


import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships.service';
@Injectable()
export class StarshipsEffects {

  constructor(
    private action$: Actions,
    private shipsService: ShipsService
  ) {

  }

  // load Starships
  @Effect()
  loadStarships$: Observable<Action> = this.action$.pipe(
    ofType(fromStarshipsActions.LOAD_STARSHIPS),
    switchMap(() => this.shipsService.getShips()
    .pipe(
      map(response => {
        return new fromStarshipsActions.LoadStarshipsSucess(response);
      },
      catchError(error => of(new fromStarshipsActions.LoadStarshipsFail(error)))
      )
    ))
  );





}
