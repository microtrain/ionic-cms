import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user/user';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {
    this.getUser(this.navParams.data.id);
  }

  private getUser(id: string): void {

    this.userProvider.getUser(id).subscribe(
      (response: any)=>{
        this.user = response.user;
        console.log(this.user);
      }
    );
  }

}
