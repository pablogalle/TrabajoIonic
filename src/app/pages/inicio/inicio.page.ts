import {Component, OnInit, ViewChild} from '@angular/core';
import { Serie } from "../../common/interfaces";
import {DataService} from "../../services/data.service";
import {IonInfiniteScroll, NavController} from "@ionic/angular";



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false})infiniteScroll!: IonInfiniteScroll;
  //TODO: cargar las series de la api de 3 en tres e ir cargando mas con el infinite scroll
  series: Serie[] = [];
  constructor(private  dataService:  DataService, private navCtrl: NavController) { }

  ngOnInit() {
    this.cargarSeries();
  }

  private cargarSeries() {
    this.dataService.getSeriesList().subscribe(
      (data: any) => {this.series = data;}
    );
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

/*
  loadSeries(event?: any){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.dataService.loadSeries(this.currentPage).subscribe(
      res => {
        loading.dismiss();
        this.series.push(...res.results);

        event?.target.complete();
        if(event){
          event.target.disabled = res.total_pages === this.currentPage;
        }
      }
    )
  }*/
  gotoInfoPagina(id: string) {
    this.navCtrl.navigateForward('/info-serie/'+id);
  }
}
