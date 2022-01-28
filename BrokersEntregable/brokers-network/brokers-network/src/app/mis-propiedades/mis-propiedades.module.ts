import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPropiedadesPageRoutingModule } from './mis-propiedades-routing.module';

import { MisPropiedadesPage } from './mis-propiedades.page';
import { SharedModule } from '../shared/shared.module';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPropiedadesPageRoutingModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  declarations: [MisPropiedadesPage]
})
export class MisPropiedadesPageModule {}
