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
  

  constructor() { }
}
