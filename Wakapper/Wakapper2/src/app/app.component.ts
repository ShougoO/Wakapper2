import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';

import { DataService } from './data.service';

@Component({
  selector: 'sample-component',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  static text: string;
  showText: string;
  position: any = { lat: 33.9144938, lng: 130.7528295 };

  rootPage: any = HomePage;
  pagesNames: Array<string> = [
    'ホーム画面',
    '区内マップ',
    '掲示板',
    'イベントカレンダー',
    '運行表'
  ];
  page1: Array<{ title: string, component: any, name: string }>;
  page2: Array<{ title: string, component: any, name: string }>;
  page3: Array<{ title: string, component: any, name: string }>;
  page4: Array<{ title: string, component: any, name: string }>;
  page: any;

  constructor(public platform: Platform, private dataService: DataService) {
    this.initializeApp();

    // "ngIf" & "ngFor"用
    this.page1 = [
      { title: this.pagesNames[0], component: HomePage, name: 'HomePage' },
      { title: this.pagesNames[2], component: Page2,    name: 'Page2' },
      { title: this.pagesNames[3], component: Page3,    name: 'Page3' },
      { title: this.pagesNames[4], component: Page4,    name: 'Page4' }
    ];

    this.page2 = [
      { title: this.pagesNames[0], component: HomePage, name: 'HomePage' },
      { title: this.pagesNames[1], component: Page1,    name: 'Page1' },
      { title: this.pagesNames[3], component: Page3,    name: 'Page3' },
      { title: this.pagesNames[4], component: Page4,    name: 'Page4' }
    ];

    this.page3 = [
      { title: this.pagesNames[0], component: HomePage, name: 'HomePage' },
      { title: this.pagesNames[1], component: Page1,    name: 'Page1' },
      { title: this.pagesNames[2], component: Page2,    name: 'Page2' },
      { title: this.pagesNames[4], component: Page4,    name: 'Page4' }
    ];

    this.page4 = [
      { title: this.pagesNames[0], component: HomePage, name: 'HomePage' },
      { title: this.pagesNames[1], component: Page1,    name: 'Page1' },
      { title: this.pagesNames[2], component: Page2,    name: 'Page2' },
      { title: this.pagesNames[3], component: Page3,    name: 'Page3' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      // Page1に移動する際は若松区の座標（緯度(lat),経度(lng)）を渡す
      this.dataService.Text$.subscribe(text => {
        if (text == "Page01") {
          this.showText = "Page1";
          this.nav.setRoot(Page1, this.position);

        } else if (text == "Page02") {
          this.showText = "Page2";
          this.nav.setRoot(Page2, "Page2");

        } else if (text == "Page03") {
          this.showText = "Page3";
          this.nav.setRoot(Page3, "Page3");

        } else if (text == "Page04") {
          this.showText = "Page4";
          this.nav.setRoot(Page4, "Page4");

        } else {
          this.showText = text;
          if (text == "Page1") {
            this.nav.setRoot(Page1, this.position);
          } else {
            this.nav.setRoot(this.page.component, { text });
          }
        }
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);

    this.page = page;
    this.dataService.sendSampleText(page.name);
  }
}
