import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Serie} from "../common/interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getComponentesMenu(){
    return this.http.get('/assets/data/menu.json');
  }

  getSeriesList(): Observable<Serie[]>{
    return this.http.get<Serie[]>(environment.baseUrl);
  }
  getSerieById(id: string){
    return this.http.get<Serie>(environment.baseUrl+'/serie/'+id)
  }
}
