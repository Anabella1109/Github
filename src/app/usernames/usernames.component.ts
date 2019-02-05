import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Repos} from '../repos'
 import {Repositories} from '../Repo'
 import {Usernames} from '../usernames'
 import {UserNamess} from '../UserNamess'
 import {UserService} from '../users/user.service'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import {UserRequestService} from '../request/user-request.service'
import { Router} from '@angular/router';



@Component({
  selector: 'app-usernames',
  templateUrl: './usernames.component.html',
  providers:[UserService],
  styleUrls: ['./usernames.component.css']
})
export class UsernamesComponent implements OnInit {
  newUser=new Usernames(0,"","",0,0,0,"",new Date())
  @Output() addUser=new EventEmitter<Usernames>()
users:Usernames[];
user:Usernames;
addNewUser(user){
   this.addUser.emit(user);
     console.log(user)
  this.request.userRequest(user)
  this.user=this.request.user

  // this.users.push(user)
}
goToUrl(id){
  this.router.navigate(['user',id])
}
  constructor(userSevice:UserService,private http:HttpClient,private request:UserRequestService,private router:Router) {
    this.users=userSevice.getUser()
   }

  ngOnInit() {
  // this.request.userRequest(this.user)
  // this.user=this.request.user
  }
}
