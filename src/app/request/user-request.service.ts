import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Usernames} from '../usernames';
import {UserNamess} from '../UserNamess'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:Usernames;
  constructor(private http:HttpClient) { 
    this.user=new Usernames(0,"","",0,0);
  }

  userRequest(){

    interface ApiResponse{
        
        id:number;
         name:string
         avatar_url:string
         followers:number
         following:number

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/' +this.user+ '?access_token='+ environment.api_key).toPromise().then(response=>{
            
            this.user.id=response.id
            this.user.name=response.name
            this.user.profile_image=response.avatar_url
            this.user.followers=response.followers
            this.user.following=response.following


            resolve()
        },
        error=>{
                // this.user.quote="Never, never, never give up."
                // this.quote.author="winston churchill"
                reject(error)
            }
        )
    })

    return promise
  }
}

  
