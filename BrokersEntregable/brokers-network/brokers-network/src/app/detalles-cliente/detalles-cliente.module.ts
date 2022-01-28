import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesClientePageRoutingModule } from './detalles-cliente-routing.module';

import { DetallesClientePage } from './detalles-cliente.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesClientePageRoutingModule,
    SharedModule
  ],
  declarations: [DetallesClientePage]
})
export class DetallesClientePageModule {}
