import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPropiedadPage } from './add-propiedad.page';

const routes: Routes = [
  {
    path: '',
    component: AddPropiedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPropiedadPageRoutingModule {}
