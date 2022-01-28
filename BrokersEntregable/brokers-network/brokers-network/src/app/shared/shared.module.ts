import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuRegistroComponent } from './menu-registro/menu-registro.component';
import { FooterBlueComponent } from './footer-blue/footer-blue.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ButtonFabComponent } from './button-fab/button-fab.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuRegistroComponent,
    FooterBlueComponent,
    MainHeaderComponent,
    ButtonFabComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuRegistroComponent,
    FooterBlueComponent,
    MainHeaderComponent,
    ButtonFabComponent
  ]
})
export class SharedModule { }
