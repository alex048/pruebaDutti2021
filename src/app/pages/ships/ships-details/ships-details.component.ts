import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShipsService } from 'src/app/services/ships.service';
import { Starships } from 'src/app/models/starships.module';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/shared/base-component/base-component';
import * as StarshipsActions from '../../../store/actions/starships.action';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnChanges {
  @Input() ships: Starships[];
  @Input() currentPage: number;
  @Input() totalShips: number;


  public shipsPerPage = 10;
  public shipsImages: string[] = [];
  // Modal
  titleDetails = '';
  modelDetails = '';
  starshipClass = '';

  constructor(private store: Store) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.generateStarshipsImages();
  }

  private generateStarshipsImages() {
    this.ships.forEach((ship) => {
      if (!this.shipsImages[ship.url]) {
        this.shipsImages[ship.url] = this.getStarshipImageFromUrl(ship.url);
      }
    });
  }

  private getStarshipImageFromUrl(url: string) {
    if (url[url.length - 1] === '/') {
      url = url.substring(0, url.length - 1);
    }
    const shipId = url.substring(url.lastIndexOf('/') + 1);
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`;
    return urlImage;
  }
  pageChanged(page: number) {
    this.store.dispatch({
      type: StarshipsActions.GET_STARSHIPS_PAGE,
      payload: { page },
    });
  }
  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starshipClass = details.starship_class;
  }
}
