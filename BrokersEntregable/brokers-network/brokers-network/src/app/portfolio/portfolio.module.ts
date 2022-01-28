import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioPageRoutingModule } from './portfolio-routing.module';

import { PortfolioPage } from './portfolio.page';
import { SharedModule } from '../shared/shared.module';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioPageRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  declarations: [PortfolioPage]
})
export class PortfolioPageModule {}
