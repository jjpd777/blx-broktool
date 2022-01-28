import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmaCasaPage } from './firma-casa.page';

const routes: Routes = [
  {
    path: '',
    component: FirmaCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirmaCasaPageRoutingModule {}
