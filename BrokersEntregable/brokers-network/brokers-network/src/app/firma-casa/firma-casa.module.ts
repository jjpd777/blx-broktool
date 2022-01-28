import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FirmaCasaPageRoutingModule } from "./firma-casa-routing.module";

import { FirmaCasaPage } from "./firma-casa.page";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirmaCasaPageRoutingModule,
    SharedModule
  ],
  declarations: [FirmaCasaPage]
})
export class FirmaCasaPageModule {}
