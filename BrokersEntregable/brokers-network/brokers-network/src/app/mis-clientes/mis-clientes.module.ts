import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisClientesPageRoutingModule } from './mis-clientes-routing.module';

import { MisClientesPage } from './mis-clientes.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MisClientesPageRoutingModule
  ],
  declarations: [MisClientesPage]
})
export class MisClientesPageModule {}
