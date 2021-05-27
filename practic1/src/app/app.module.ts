import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/posts/post/post.component';
import {PostService} from "./services/post.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
