import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Usernames} from '../usernames';
import {UserNamess} from '../UserNamess'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
users:Usernames[];

  user:Usernames;
  constructor(private http:HttpClient) { 
    this.user=new Usernames(0,"","",0,0,0,"",new Date());
  }

  userRequest(user){

    interface ApiResponse{
        
        id:number;
         login:string
         avatar_url:string
         followers:number
         following:number
         public_repos:number
         html_url:string
         created_at:Date

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/' +user+ '?access_token='+ environment.api_key).toPromise().then(response=>{
            
            this.user.id=response.id
            this.user.name=response.login
            this.user.profile_image=response.avatar_url
            this.user.followers=response.followers
            this.user.following=response.following
            this.user.repos=response.public_repos
            this.user.repo=response.html_url
            this.user.creationDate=response.created_at
// this.user=new Usernames(response.id,response.name,response.avatar_url,response.followers,response.following);

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
  repoRequest(){

  }

}

  

