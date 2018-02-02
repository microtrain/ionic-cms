import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user/user';

@Injectable()
export class UserProvider {

  // Set the base URL
  private url: string = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient) { }

  public getUser(){
    console.log('Get User');
  }

  public getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }

  public createUser(){
    console.log('Create User');
  }

  public updateUser(){
    console.log('Update User');
  }

  public deleteUser(){
    console.log('Delete User');
  }
}
