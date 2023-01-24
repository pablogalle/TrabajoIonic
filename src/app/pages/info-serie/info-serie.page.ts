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

  serie: any;
  constructor( private dataService: DataService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null){
      this.dataService.getSerieById(id).subscribe(
        (data: any) => {this.serie = data as Serie;}
      )
      console.log(this.serie.id);
    }

  }

}
