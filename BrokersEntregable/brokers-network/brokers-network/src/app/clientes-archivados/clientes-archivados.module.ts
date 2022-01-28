import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesArchivadosPageRoutingModule } from './clientes-archivados-routing.module';

import { ClientesArchivadosPage } from './clientes-archivados.page';
import {SharedModule} from "../shared/shared.module";
import {TabsModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ClientesArchivadosPageRoutingModule,
    TabsModule
  ],
  declarations: [ClientesArchivadosPage]
})
export class ClientesArchivadosPageModule {}
