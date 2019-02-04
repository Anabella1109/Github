import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usernames} from '../usernames'
import {UserNamess} from '../UserNamess'
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
   newUser=new Usernames(0,"");

    @Output() addUser=new EventEmitter<Usernames>();

  constructor(private http:HttpClient) {
    this.newUser=new Usernames(0,"");
   }

   getUser(){

    
    
    this.addUser.emit(this.newUser);

    //  this.users.push(this.newUser)

    // return promise
  }

  ngOnInit() {
  }

}
