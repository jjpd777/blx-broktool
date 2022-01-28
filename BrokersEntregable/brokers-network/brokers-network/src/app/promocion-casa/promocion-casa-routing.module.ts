import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocionCasaPage } from './promocion-casa.page';

const routes: Routes = [
  {
    path: '',
    component: PromocionCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocionCasaPageRoutingModule {}
