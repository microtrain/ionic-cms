import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public users: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
  ) {
    this.getUsers();
  }

  private getUsers(): void {
    this.userProvider.getUsers().subscribe(
      (response)=>{

        this.users = response.users;

        console.log(this.users);
      }
    );
  }

}
