import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BenchPage } from '../bench/bench';
/*
  Generated class for the Abs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-abs',
  templateUrl: 'abs.html'
})
export class AbsPage {

 benchI=BenchPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsPage');
  }

}
