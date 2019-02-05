import { Component, OnInit ,Input} from '@angular/core';
import {Repos} from '../repos'
 import {Repositories} from '../Repo'
 import {Usernames} from '../usernames'
 import {UserNamess} from '../UserNamess'
 import {UserService} from '../users/user.service'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import {UserRequestService} from '../request/user-request.service'


@Component({
  selector: 'app-usernames',
  templateUrl: './usernames.component.html',
  providers:[UserService],
  styleUrls: ['./usernames.component.css']
})
export class UsernamesComponent implements OnInit {
  
users:Usernames[];
user:Usernames;
addNewUser(user){
  this.users.push(user)
}
  constructor(userSevice:UserService,private http:HttpClient,private request:UserRequestService) {
    this.users=userSevice.getUser()
   }

  ngOnInit() {
  //    interface ApiResponse{
  //        id:number;
  //        name:string
  //        avatar_url:string
  //        followers:number
  //        following:number

  //   }
  //   let promise =new Promise((resolve,reject)=>{
  //       this.http.get<ApiResponse>('https://api.github.com/users/' +"Anabella1109"+ '?access_token='+ environment.api_key).toPromise().then(response=>{
            
  //          this.user

  //           resolve()
  //       },
  //       error=>{
  //               // this.user.id=0;
                
  //               reject(error)
  //           }
  //       )
  //   })
  //   return promise
  // }
  this.request.userRequest()
  this.user=this.request.user
  }
}
