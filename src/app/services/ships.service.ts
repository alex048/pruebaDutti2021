import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Starships } from '../models/starships.module';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/?page=1'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getStarships(): Observable<any> {
    return this.http.get<Starships[]>(this.url)
      .pipe(map((data: any) => {
        console.log(data.results)
        return data;
      }));
  }

  //.pipe(  map(data => { return data })  )
}
