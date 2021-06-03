import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import {UserService} from "./services/user.service";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[UserService]
})
export class UsersModule { }
