import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { Starships } from '../models/starships.module';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getStarships(page = 1): Observable<any> {
    let params = new HttpParams();

    if (page !== 1) {
      params = params.set('page', page.toString());
    }

    return this.http.get(this.url, { params })
      .pipe(
        take(1),
      );
  }


  //.pipe(  map(data => { return data })  )
  /**
   *  return this.http.get<Starships[]>(this.url,{params})
      .pipe(map((data: any) => {
        console.log(data.results)
        return data;
      }));
   */
}
