import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HammerPage } from '../hammer/hammer';
/*
  Generated class for the Bicep page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bicep',
  templateUrl: 'bicep.html'
})
export class BicepPage {

  hammerI = HammerPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BicepPage');
  }

}
