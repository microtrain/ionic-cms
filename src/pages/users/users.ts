import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user/user';

import { UserPage } from '../user/user';
import { UserCreatePage } from '../user-create/user-create';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  private loader: any;

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
      (response: any)=>{
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

  public toUser(id: string): void {
    this.navCtrl.push(UserPage, { id: id });
  }

  public toUserCreate(id: string): void {
    this.navCtrl.push(UserCreatePage);
  }
}
