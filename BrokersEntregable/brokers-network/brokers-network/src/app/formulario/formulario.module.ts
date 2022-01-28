import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';
import {SharedModule} from "../shared/shared.module";
import { FormularioPage } from './formulario.page';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FormularioPageRoutingModule,
    BsDatepickerModule
  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}
