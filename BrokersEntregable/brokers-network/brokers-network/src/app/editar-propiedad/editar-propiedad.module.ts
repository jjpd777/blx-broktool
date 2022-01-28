import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPropiedadPageRoutingModule } from './editar-propiedad-routing.module';

import { EditarPropiedadPage } from './editar-propiedad.page';
import {SharedModule} from "../shared/shared.module";

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EditarPropiedadPageRoutingModule,
    BsDatepickerModule
  ],
  declarations: [EditarPropiedadPage]
})
export class EditarPropiedadPageModule {}
