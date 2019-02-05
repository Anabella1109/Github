import { Injectable } from '@angular/core';
import { Usernames} from '../usernames';
import {UserNamess} from '../UserNamess'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(){
    return UserNamess;
  }
  getId(id){
    for(let user of UserNamess){
      if(user.id == id){
        return user;
      }
    }
  }
  

  constructor() { }
}
