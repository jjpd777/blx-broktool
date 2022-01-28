import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregaCasaPage } from './entrega-casa.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregaCasaPageRoutingModule {}
