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

  titleData: string;
  commentData: string;

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
      // json読み込み
      var jsonData = require('./comment.json');
      alert(jsonData);
      // htmlの挿入場所(タグの場所)を取得
      //var Comments = this.content.nativeElement;

      // コメント切り取り
      // 1)','で区切り、titleとcommentsに分ける
      var data = JSON.stringify(jsonData);
      this.titleData = data.split(",", 2)[0];
      this.commentData = data.split(",", 2)[1];

      // 2)" "で各々区切り、文字列のみにする
      this.titleData = this.titleData.split(" ", 2)[1];
      this.commentData = this.commentData.split(" ", 2)[1];

      /*
      //var json_data = '{"comment": "投稿テスト"}';
      //var json_data = JSON.parse('./comment.json');

      // json読み込み
      //var jsonData = require('./comment.json');
      //var jsonData = '{"comment": " 投稿テスト "}';

      var data = JSON.parse('"foo"');
      alert(data.comment);

      var str1 = data["suffix1"];
      var str = str1;
      Comments.innerHTML += str;
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
