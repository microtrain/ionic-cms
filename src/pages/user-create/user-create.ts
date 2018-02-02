import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user/user';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

  public user = new User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
  ) {
    //Just a test
    this.createUser({'email':'test@exmaple.com', 'username':'hello'});
  }

  public createUser(user: User): void {
    this.userProvider.createUser(user).subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

}
