import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./services/user.service";
import { UserComponent } from './components/users/user/user.component';
import {PostService} from "./services/post.service";
import { PostComponent } from './components/posts/post/post.component';
import { DetailPostComponent } from './components/posts/detail-post/detail-post.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';

let routes: Routes = [
  {path: 'user', component: UsersComponent, resolve: {data: UserService},children: [
      {path: ':id', component:DetailUserComponent }
    ]},
  {path: 'post', component: PostsComponent, resolve: {data: PostService},children: [
      {path: ':id', component:DetailPostComponent }
    ]}
    ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    PostComponent,
    DetailPostComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
