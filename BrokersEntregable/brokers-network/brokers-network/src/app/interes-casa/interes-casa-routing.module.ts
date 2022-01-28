import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteresCasaPage } from './interes-casa.page';

const routes: Routes = [
  {
    path: '',
    component: InteresCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteresCasaPageRoutingModule {}
