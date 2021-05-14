import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StarshipsState } from 'src/app/models/Starships-state';
import * as StarshipsActions from '../../store/actions/starships.action';
import { AppState } from '../../app.state';
declare var $: any;
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public shipsState$: Observable<StarshipsState>;

  constructor(private store: Store<AppState>) {
    // Observable del Store
    this.shipsState$ = this.store.select('ships');
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: StarshipsActions.GET_SHIPS_PAGE,
      payload: { page: 1 },
    });
  }
}
