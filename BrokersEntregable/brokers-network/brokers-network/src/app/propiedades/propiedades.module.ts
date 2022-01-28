import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropiedadesPageRoutingModule } from './propiedades-routing.module';

import { PropiedadesPage } from './propiedades.page';
import { SharedModule } from '../shared/shared.module';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropiedadesPageRoutingModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  declarations: [PropiedadesPage]
})
export class PropiedadesPageModule {}
