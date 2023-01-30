import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IonInfiniteScroll, NavController} from "@ionic/angular";
import {Serie} from "../../common/interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit, OnChanges {

  @Input() genre: string = "";

  @ViewChild(IonInfiniteScroll, {static: false})infiniteScroll!: IonInfiniteScroll;
  //TODO: cargar las series de la api de 3 en tres e ir cargando mas con el infinite scroll
  series: Serie[] = [];
  constructor(private  dataService:  DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.cargarSeries();

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cargarSeries();
  }

  private cargarSeries() {

    if (this.genre == ""){
      this.dataService.getSeriesList().subscribe(
        data => {this.series = data;}
      );
    }else {
      this.dataService.getSeriesListByGenre(this.genre).subscribe(
        data => {this.series = data;}
      )
    }
  }

  loadData(event: any) {
    setTimeout(() => {
      if (this.series.length >= this.series.length) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(3);
      this.series.push(...nuevoArr);
      event.target.complete();
    }, 1000);
  }

  gotoInfoPagina(id: string) {
    this.navCtrl.navigateForward('/info-serie/'+id);
  }

}
