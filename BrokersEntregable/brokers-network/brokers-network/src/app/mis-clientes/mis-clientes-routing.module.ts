import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisClientesPage } from './mis-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: MisClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisClientesPageRoutingModule {}
