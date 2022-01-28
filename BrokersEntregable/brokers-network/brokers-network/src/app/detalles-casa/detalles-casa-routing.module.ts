import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCasaPage } from './detalles-casa.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCasaPageRoutingModule {}
