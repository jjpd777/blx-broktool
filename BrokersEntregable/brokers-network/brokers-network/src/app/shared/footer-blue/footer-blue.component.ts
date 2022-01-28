import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-footer-blue',
  templateUrl: './footer-blue.component.html',
  styleUrls: ['./footer-blue.component.scss'],
})
export class FooterBlueComponent implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}
  openLink(){
    this.iab.create("https://www.brokersnetwork.mx/","_system");
  }
}
