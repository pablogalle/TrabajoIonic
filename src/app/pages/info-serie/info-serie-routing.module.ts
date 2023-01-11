import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoSeriePage } from './info-serie.page';

const routes: Routes = [
  {
    path: '',
    component: InfoSeriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoSeriePageRoutingModule {}
