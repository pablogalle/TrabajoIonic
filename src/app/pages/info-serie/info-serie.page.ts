import { Component, OnInit } from '@angular/core';
import {Genre, Score, Serie} from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-serie',
  templateUrl: './info-serie.page.html',
  styleUrls: ['./info-serie.page.scss'],
})
export class InfoSeriePage implements OnInit {

  serie: Serie = new class implements Serie {
    _id = "";
    genres = [];
    images = "";
    num_episodes = 0;
    scores = [];
    synopsis = "";
    title = "";
    year_of_emision = 1;
  }

  options = {
    slidesPerView: 1,
    slidesOffsetBefore: 0,
    separator: 10
  };

  constructor( private dataService: DataService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getMySerie()
    }

  getMySerie(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Id recibida: '+id);
    if (id!= null){
      this.dataService.getSerieById(id).subscribe(
        data => {
          this.serie = data ;
          console.log('Serie recibida: '+this.serie.title);
        });

    }

  }

}
