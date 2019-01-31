import { Component, OnInit } from '@angular/core';
import {Repos} from '../repos'
 import {Repositories} from '../Repo'



@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos=Repositories;

  constructor() { }

  ngOnInit() {
  }

}
