import { Component, OnInit ,Input} from '@angular/core';
import {Repos} from '../repos'
 import {Repositories} from '../Repo'
 import {Usernames} from '../usernames'
 import {UserNamess} from '../UserNamess'
@Component({
  selector: 'app-usernames',
  templateUrl: './usernames.component.html',
  styleUrls: ['./usernames.component.css']
})
export class UsernamesComponent implements OnInit {
  
users=[
  new Usernames(0,"")
]
addNewUser(user){
  this.users.push(user)
}
  constructor() { }

  ngOnInit() {
  }

}
