import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { ShipsService } from 'src/app/services/ships.service';
import { AppState } from 'src/app/store';
import { Starships } from 'src/app/models/starships.module';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  starships: Starships[];
  display = 'none';
  isEditModeEnabled;

  constructor(private store: Store<AppState>, private shipsService: ShipsService) {
  }
  ngOnInit(): void {
    console.log('init');
    this.store.dispatch(new fromStore.loadStarships());

    this.store.select(fromStore.getStarships).subscribe(res => {
      this.starships = res;
      console.log('hola001', this.starships)
    });
  }
}
