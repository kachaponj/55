import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChinupPage } from '../chinup/chinup';
/*
  Generated class for the Back page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-back',
  templateUrl: 'back.html'
})
export class BackPage {

chinupI = ChinupPage
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackPage');
  }

}
