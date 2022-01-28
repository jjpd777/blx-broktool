import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesArchivadosPage } from './clientes-archivados.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesArchivadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesArchivadosPageRoutingModule {}
