import { Component, ViewChild } from '@angular/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

import { RegiForm } from './registration/registration';
import { SubmForm } from './submit/submit';

declare function require(x: string): any;

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  @ViewChild('content') content;
  text: string;
  showText: string;

  Q: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = navParams.get("text");
    this.showText = this.text;
  }

  ionViewDidLoad() {
    var Url = document.location.search.substring(1);
    var urlParams = new URLSearchParams(Url, new QueryEncoder());
    this.Q = urlParams.get("q");
    
    if (this.Q == "subm") {
      //var json_data = '{"comment": "投稿テスト"}';
      //var json_data = JSON.parse('./comment.json');
      
      var Comments = this.content.nativeElement;
      var jsonData = require('./comment.json');
      console.log(jsonData);
      var data = JSON.stringify(jsonData);
      var data1 = data.split(":", 2)[1];
      var data2 = data1.split(" ", 3)[1];
      this.showText = data2;

      /*
      var data = JSON.parse('"foo"');
      alert(data.comment);
      
      var str1 = data["suffix1"];
      var str = str1;
      //Comments.innerHTML += str;
      */
      /*
      './comment.json'

      <ion-card >
        <ion-card - header >
          Test
        </ion-card-header>
        <ion - card - content >
          aaaaaaaaaaaaaaaaa.
        </ion-card-content>
      </ion-card>
      */
    }
  }

  goToSubm() {
    this.navCtrl.push(SubmForm);
  }

  goToRegi() {
    this.navCtrl.push(RegiForm);
  }
}
