import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFinalPageRoutingModule } from './registro-final-routing.module';

import { RegistroFinalPage } from './registro-final.page';
import { SharedModule } from '../shared/shared.module';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RegistroFinalPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistroFinalPage]
})
export class RegistroFinalPageModule {}
