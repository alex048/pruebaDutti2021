import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators'
import { Starships } from '../models/starships.module';
import { StarshipsResponse } from '../models/starships-response';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  // url: string = 'https://swapi.dev/api/starships/?page=1'
  url = 'https://swapi.dev/api/starships/';
  private shipsResponsesCache: StarshipsResponse[] = [];
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAllStarships(): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(
      `https://swapi.dev/api/starships`
    );
  }

  getPage(page: number): Observable<StarshipsResponse> {
    if (this.shipsResponsesCache[page]) {
      return of(this.shipsResponsesCache[page]);
    } else {
      return this.http
        .get<StarshipsResponse>(
          `https://swapi.dev/api/starships?page=${page}`
        )
        .pipe(
          tap(
            (shipsResponse) => (this.shipsResponsesCache[page] = shipsResponse)
          )
        );
    }
  }
  //.pipe(  map(data => { return data })  )
}
