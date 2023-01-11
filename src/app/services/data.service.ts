import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getComponentesMenu(){
    return this.http.get('/assets/data/menu.json');
  }
  getSeriesInicio(){
    return this.http.get('/assets/data/series.json');
  }
  /*getInfoSerie(){
    return this.http.get('/assets/data/series.json')
  }*/
}
