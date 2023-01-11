import { Component, OnInit } from '@angular/core';
import {SerieInfo, SerieInicio} from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-serie',
  templateUrl: './info-serie.page.html',
  styleUrls: ['./info-serie.page.scss'],
})
export class InfoSeriePage implements OnInit {

  constructor( private dataService: DataService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
