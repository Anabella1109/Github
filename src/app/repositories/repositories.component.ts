import { Component, OnInit } from '@angular/core';
import {Repos} from '../repos'
 import {Repositories} from '../Repo'
 import {Usernames} from '../usernames'
 import {UserNamess} from '../UserNamess'



@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  // UserNamess:Usernames[]
  // user=new Usernames(0,"Kai")
  repos:Repos[];
  constructor() { }

  ngOnInit() {
  }

}
