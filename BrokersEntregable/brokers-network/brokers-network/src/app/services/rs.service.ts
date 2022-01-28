import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Platform} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class RootSettingsService {

  constructor(
              private platform: Platform) {
  }

  public ROOTURL = "http://broktoolserver.com/ControlPanel/php/admin/"

  public obtnerViajesPorIDServicio(){
  }
}
