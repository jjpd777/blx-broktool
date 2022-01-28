import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsappPageRoutingModule } from './whatsapp-routing.module';

import { WhatsappPage } from './whatsapp.page';
import {SharedModule} from "../shared/shared.module";
import {FormularioPageRoutingModule} from "../formulario/formulario-routing.module";
import {BsDatepickerModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BsDatepickerModule,
    WhatsappPageRoutingModule
  ],
  declarations: [WhatsappPage]
})
export class WhatsappPageModule {}
