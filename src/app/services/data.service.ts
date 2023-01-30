import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {Genre, Serie} from "../common/interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedGenre: string = "";

  constructor(private http: HttpClient) { }
  getComponentesMenu(){
    return this.http.get('/assets/data/menu.json');
  }
  getSeriesList(): Observable<Serie[]>{
    return this.http.get<Serie[]>(environment.baseUrl);
  }
  getSeriesListByGenre(genre: string) {
    return this.http.get<Serie[]>(environment.baseUrl+'/seriesgenre/'+genre)
  }
  setGenre(genre: string) {
    this.selectedGenre = genre;
  }
  getGenre(): Observable<any>{
    return from(this.selectedGenre);
  }
  getSerieById(id: string){
    return this.http.get<Serie>(environment.baseUrl+'/serie/'+id)
  }

  getGenresList() {
    return this.http.get<Genre[]>(environment.baseUrl+'/genres')
  }

}
