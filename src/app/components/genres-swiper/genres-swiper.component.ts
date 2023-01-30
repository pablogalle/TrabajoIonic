import { Component, OnInit } from '@angular/core';
import {Genre, Serie} from "../../common/interfaces";
import {DataService} from "../../services/data.service";


@Component({
  selector: 'app-genres-swiper',
  templateUrl: './genres-swiper.component.html',
  styleUrls: ['./genres-swiper.component.scss'],
})
export class GenresSwiperComponent implements OnInit {
  options = {
    slidesPerView: 4.5,
    slidesOffsetBefore: 0,
    separator: 10
  };

  selectedGenre = ""
  seriesByGenre: Serie[] = [];
  genres: Genre[] = [];
  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarSeries();

  }

  private cargarSeries() {
    this.dataService.getSeriesList().subscribe(
      (data: any) => {this.seriesByGenre = data;}
    );
  }

  private cargarCategorias() {
    this.dataService.getGenresList().subscribe(
      data => this.genres = data
    )
  }

  setGenreService(genre: string) {
    this.dataService.setGenre(genre);
  }
}
