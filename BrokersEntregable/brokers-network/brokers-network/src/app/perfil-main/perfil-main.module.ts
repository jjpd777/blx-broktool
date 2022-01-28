import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMainPageRoutingModule } from './perfil-main-routing.module';

import { PerfilMainPage } from './perfil-main.page';
import { SharedModule } from '../shared/shared.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMainPageRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [PerfilMainPage]
})
export class PerfilMainPageModule {}
