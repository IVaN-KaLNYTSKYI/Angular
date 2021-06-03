import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {PostService} from "./services/post.service";
import {PostIdService} from "./services/post-id.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[PostService,PostIdService]
})
export class PostsModule { }
