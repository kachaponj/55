import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BenchpressPage } from '../benchpress/benchpress';
/*
  Generated class for the Chest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chest',
  templateUrl: 'chest.html'
})
export class ChestPage {

benchpressI = BenchpressPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChestPage');
  }

}
