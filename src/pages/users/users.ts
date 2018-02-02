import { Component } from '@angular/core';
//1. Import LoadingController
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  //3. Create a space in memory to hold a loader
  private loader: LoadingController;

  public users: User[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    //2. Inject the LoadingController
    private loadingCtrl: LoadingController
  ) {
    this.getUsers();
  }

  private getUsers(): void {

    //5. Call the loaded when requesting user data
    this.presentLoader();

    this.userProvider.getUsers().subscribe(
      (response)=>{
        this.users = response.users;
        //6. Dismiss the loader after the HTTP request has completed
        this.loader.dismiss();
      }
    );
  }

  // 4. Create a method and display a loader
  private presentLoader(): void {

    this.loader = this.loadingCtrl.create({
      content: 'Loading...',
    });

    this.loader.present();
  }

}
