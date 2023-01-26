import { Component, OnInit } from '@angular/core';
import {Serie} from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-serie',
  templateUrl: './info-serie.page.html',
  styleUrls: ['./info-serie.page.scss'],
})
export class InfoSeriePage implements OnInit {

  series: Serie[] = [];

  constructor( private dataService: DataService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getMySerie()
    }

    //TODO: Que funcione :)

  getMySerie(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Id recibida: '+id);
    if (id!= null){
      this.dataService.getSerieById(id).subscribe(
        data => {
          this.series[0] = data ;
          console.log('Serie recibida: '+data.title);
        });

      //onsole.log('Serie : '+this.series[0].title);

    }

  }

}
