import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) { }

  public getUser(){
    console.log('Get User');
  }

  public getUsers(){
    console.log('Get Users');
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
