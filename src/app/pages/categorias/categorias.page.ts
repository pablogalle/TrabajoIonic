import {Component, OnInit, ViewChild} from '@angular/core';
import {IonList} from "@ionic/angular";
import {SerieInicio} from "../../common/interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  series: SerieInicio[] = [];
  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.cargarSeries();
  }

  private cargarSeries() {
    this.dataService.getSeriesInicio().subscribe(
      (data: any) => {this.series = data;}
    );
  }
}
