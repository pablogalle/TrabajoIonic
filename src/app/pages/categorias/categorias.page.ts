import {Component, OnInit} from '@angular/core';
import {Serie} from "../../common/interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  options = {
    slidesPerView: 4.5,
    slidesOffsetBefore: 0,
    separator: 10
  };

  series: Serie[] = [];
  genres: string[] = [];
  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarSeries();
  }

  private cargarSeries() {
    this.dataService.getSeriesList().subscribe(
      (data: any) => {this.series = data;}
    );
  }

  private cargarCategorias() {
    this.dataService.getGenresList().subscribe(
      (data:any) => this.genres = data
    )
  }
}
