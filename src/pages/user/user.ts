import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// 2. Import the User provider and model.
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user/user';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  // 4. Declare a public user variable. This will hold the user data that is
  // returned from the API
  public user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // 3. Inject the UserProvider into UserPage
    public userProvider: UserProvider
  ) {
    // 7. Call the getUser() wrapper on start up.
    // 8. User NavParams to retrive incomming userId from NavController 
    this.getUser(this.navParams.data.id);
  }

  // 5. Create a getUser() wrapper and subcribe to the getUser Observable.
  private getUser(id: string): void {

    this.userProvider.getUser(id).subscribe(
      (response: any)=>{
        this.user = response.user;
        // 6. Log the results
        console.log(this.user);
      }
    );
  }

}
