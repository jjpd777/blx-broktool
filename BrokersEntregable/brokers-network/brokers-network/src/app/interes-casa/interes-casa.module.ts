import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { InteresCasaPageRoutingModule } from "./interes-casa-routing.module";

import { InteresCasaPage } from "./interes-casa.page";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteresCasaPageRoutingModule,
    SharedModule
  ],
  declarations: [InteresCasaPage]
})
export class InteresCasaPageModule {}
