import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  // 1. create an instance of users. This will hold an Array of user objects
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
        // 2. Set the list of users the users instance variable.
        // This will give view access to the list of users.
        this.users = response.users;

        // 3. Log the current state of the users instance.
        console.log(this.users);
      }
    );
  }

}
