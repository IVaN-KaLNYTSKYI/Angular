import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[PostService]
})
export class PostsModule { }
