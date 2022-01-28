import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropiedadesArchivadasPage } from './propiedades-archivadas.page';

const routes: Routes = [
  {
    path: '',
    component: PropiedadesArchivadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropiedadesArchivadasPageRoutingModule {}
