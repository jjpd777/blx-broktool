import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PromocionCasaPageRoutingModule } from "./promocion-casa-routing.module";

import { PromocionCasaPage } from "./promocion-casa.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionCasaPageRoutingModule,
    SharedModule
  ],
  declarations: [PromocionCasaPage]
})
export class PromocionCasaPageModule {}
