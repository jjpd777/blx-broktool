import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { SharedModule } from '../shared/shared.module';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    SharedModule,
    TabsModule
  ],
  declarations: [ClientesPage]
})
export class ClientesPageModule {}
