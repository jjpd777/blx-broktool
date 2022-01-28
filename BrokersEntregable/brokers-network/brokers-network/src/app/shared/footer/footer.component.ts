import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import {Platform} from "@ionic/angular";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private iab: InAppBrowser,public keyboard:Keyboard,public platform:Platform) { }

/*  isKeyboardHide=true;

  ionViewWillEnter() {

    this.platform.ready().then(() => {
      this.keyboard.onKeyboardWillShow().subscribe(()=>{
        this.isKeyboardHide=false;
        console.log('SHOWK');
      });

      this.keyboard.onKeyboardWillHide().subscribe(()=>{
        this.isKeyboardHide=true;
        console.log('HIDEK');
      });
    });


  }*/

  ngOnInit() {}

  openLink(){
    this.iab.create("https://www.brokersnetwork.mx/","_system");
  }

}
