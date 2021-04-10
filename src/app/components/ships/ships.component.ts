import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { ShipsService } from 'src/app/services/ships.service';
import { AppState } from 'src/app/store/app.reducer';
import { Starships } from 'src/app/models/starships.module';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base-component/base-component';
import { SHIPS_LIST } from '../../store/actions/starships.action'

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent extends BaseComponent implements OnInit {

  public _dataList: Observable<Starships[]>;


  constructor(private store: Store<AppState>,
    private shipsService: ShipsService) {
    super();
    this._dataList = store.select('ships');
  }
  ngOnInit(): void {
    console.log('init');
    const subscription = this.shipsService.getStarships()
      .subscribe((dataList) => {
        this.store.dispatch({
          type: SHIPS_LIST,
          payload: dataList
        });
      });

    // The subscription will be undone automatically. See componentBase.
    this.subscriptions.push(subscription);
  }

  getShipsPage(page = 1) {
    this.shipsService.getStarships(page)
      .pipe(
        take(1)
      )
      .subscribe((dataList) => {
        this.store.dispatch({
          type: SHIPS_LIST,
          payload: dataList
        });
      });
  }
}
