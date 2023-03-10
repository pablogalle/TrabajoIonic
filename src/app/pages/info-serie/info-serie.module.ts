import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoSeriePageRoutingModule } from './info-serie-routing.module';

import { InfoSeriePage } from './info-serie.page';
import {ComponentsModule} from "../../components/components.module";
import {SwiperModule} from "swiper/angular";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfoSeriePageRoutingModule,
        ComponentsModule,
        SwiperModule
    ],
  declarations: [InfoSeriePage]
})
export class InfoSeriePageModule {}
