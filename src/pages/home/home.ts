import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {
  FormGroup,
  FormControl

} from '@angular/forms';
import { hostViewClassName } from '@angular/compiler';
import { NextPage } from '../next/next';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  langs;
  langForm;

  constructor(public navCtrl:NavController) {

    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
nextPage(){
  this.navCtrl.push(NextPage);
}
}