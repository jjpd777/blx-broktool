import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilMainPage } from './perfil-main.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilMainPageRoutingModule {}
