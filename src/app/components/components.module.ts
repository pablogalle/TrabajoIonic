import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {MenuComponent} from "./menu/menu.component";
import {RouterLink} from "@angular/router";
import {SeriesComponent} from "./series/series.component";
import {GenresSwiperComponent} from "./genres-swiper/genres-swiper.component";
import {SwiperModule} from "swiper/angular";



@NgModule({
  declarations: [HeaderComponent, MenuComponent, SeriesComponent, GenresSwiperComponent],
  exports: [HeaderComponent, MenuComponent, SeriesComponent, GenresSwiperComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    SwiperModule
  ]
})
export class ComponentsModule { }
