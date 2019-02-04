import { Component, OnInit ,Input} from '@angular/core';
import {Repos} from '../repos'
 import {Repositories} from '../Repo'
 import {Usernames} from '../usernames'
 import {UserNamess} from '../UserNamess'
 import {UserService} from '../users/user.service'
@Component({
  selector: 'app-usernames',
  templateUrl: './usernames.component.html',
  providers:[UserService],
  styleUrls: ['./usernames.component.css']
})
export class UsernamesComponent implements OnInit {
  
users:Usernames[];
addNewUser(user){
  this.users.push(user)
}
  constructor(userSevice:UserService) {
    this.users=userSevice.getUser()
   }

  ngOnInit() {
  }

}
