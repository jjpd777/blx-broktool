import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPropiedadPageRoutingModule } from './add-propiedad-routing.module';

import { AddPropiedadPage } from './add-propiedad.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPropiedadPageRoutingModule,
    SharedModule
  ],
  declarations: [AddPropiedadPage]
})
export class AddPropiedadPageModule {}
