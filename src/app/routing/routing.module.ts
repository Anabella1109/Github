import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { RepositoriesComponent} from '../repositories/repositories.component'
import { NotFoundComponent } from '../not-found/not-found.component';
import {UsernamesComponent} from '../usernames/usernames.component'
// import { from } from 'rxjs';

const routes:Routes=[
  {path:"usernames",component:UsernamesComponent},
  {path:'**',component:NotFoundComponent},
  {path:'user/:id',component:UsernamesComponent},

]

@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
