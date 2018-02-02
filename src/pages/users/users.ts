import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  private loader: LoadingController;

  public users: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private loadingCtrl: LoadingController
  ) {
    this.getUsers();
  }

  private getUsers(): void {

    this.presentLoader();

    this.userProvider.getUsers().subscribe(
      (response)=>{
        this.users = response.users;
        this.loader.dismiss();
      }
    );
  }

  private presentLoader(): void {

    this.loader = this.loadingCtrl.create({
      content: 'Loading...',
    });

    this.loader.present();
  }

}
