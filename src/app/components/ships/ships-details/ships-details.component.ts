import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starshipClass: string = '';
  starship_class: string = '';

  constructor() {
    this.config = {
      itemsPerPage: 10,//5
      currentPage: 1,//1
      //totalItems: this.dataList.length
    };
  }

  ngOnInit(): void {

    console.log('input-> ', this.dataList)
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.dataList) {
      this.config.totalItems = this.dataList.count || 0;
    }
  }
  getStarshipId(url) {
    //this.shipId = url.slice(0, -1)
    //const urlImage = `${this.shipId}.jpg`
    //  return urlImage !== "";
    const regex = /\/api\/starships\/(\d+)\/?$/;

    this.shipId = regex.test(url)
      ? url.match(regex)[1]
      : undefined;

    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`

    return urlImage;
  }

  onPageChanged(page) {
    this.config.currentPage = page;
    this.pageChanged.emit(page);
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starshipClass = details.starship_class;
  }

}
