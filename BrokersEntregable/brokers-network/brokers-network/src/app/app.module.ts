import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

//import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Keyboard } from '@ionic-native/keyboard/ngx';

import { Calendar } from '@ionic-native/calendar/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

import { PayPal } from '@ionic-native/paypal/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [
    StatusBar,
    File,
    SplashScreen,
    Camera,
    HTTP,
    //ImagePicker,
    FileTransfer,
    InAppBrowser,
    Keyboard,
    Calendar,
    EmailComposer,
    Contacts,
    PayPal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
