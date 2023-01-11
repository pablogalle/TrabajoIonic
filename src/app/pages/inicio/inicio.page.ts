import {Component, OnInit} from '@angular/core';
import { SerieInicio } from "../../common/interfaces";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  series: SerieInicio[] = [];
  constructor(private  dataService:  DataService) { }

  ngOnInit() {
    this.cargarSeries();
  }

  private cargarSeries() {
    this.dataService.getSeriesInicio().subscribe(
      (data: any) => {this.series = data;}
    );
  }
}
