import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user/user';

@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCreatePage');
  }

}
