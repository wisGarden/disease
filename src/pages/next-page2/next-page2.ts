import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NextPage3Page } from '../next-page3/next-page3';

/**
 * Generated class for the NextPage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next-page2',
  templateUrl: 'next-page2.html',
})
export class NextPage2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage2Page');
  }
  nextPage(){
    this.navCtrl.push(NextPage3Page);
  }
}
