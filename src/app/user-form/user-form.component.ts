import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usernames} from '../usernames'
import {UserNamess} from '../UserNamess'
import {UserRequestService} from '../request/user-request.service'
// import { from } from 'rxjs';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
   newUser=new Usernames(0,"","",0,0);

    @Output() addUser=new EventEmitter<Usernames>();

  constructor(private http:HttpClient,private request:UserRequestService) {
    //   request.userRequest=this.newUser
  }
   

//    getUser(){

    //  interface ApiResponse{
    //      id:number;
    //      name:string

    // }
    // let promise =new Promise((resolve,reject)=>{
    //     this.http.get<ApiResponse>('https://api.github.com/users/' +"Anabella1109"+ '?access_token='+ environment.api_key).toPromise().then(response=>{
            
    //         // this.user.id=response.id
    //         this.newUser=new Usernames(response.id,response.name)

    //         resolve()
    //     },
    //     error=>{
    //             // this.user.id=0;
                
    //             reject(error)
    //         }
    //     )
    // })
    
    // this.addUser.emit(this.newUser);

    //  this.users.push(this.newUser)

    // return promise
//   }

  ngOnInit() {
  }

}
