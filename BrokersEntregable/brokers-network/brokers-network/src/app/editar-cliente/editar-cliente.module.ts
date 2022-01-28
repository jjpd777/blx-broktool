import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarClientePageRoutingModule } from './editar-cliente-routing.module';

import { EditarClientePage } from './editar-cliente.page';
import {SharedModule} from "../shared/shared.module";

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EditarClientePageRoutingModule,
    BsDatepickerModule
  ],
  declarations: [EditarClientePage]
})
export class EditarClientePageModule {}
