import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { UserPage } from '../../pages/user/user';
import { User } from '../../models/user/user';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

  private user : FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private formBuilder: FormBuilder
  ) {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      first_name: [],
      last_name: []
    });
  }

  public createUser(): void {
    this.userProvider.createUser(this.user.value).subscribe(
      (response: any)=>{
        this.navCtrl.push(UserPage, { id: response.user._id } );
      }
    );
  }

}
