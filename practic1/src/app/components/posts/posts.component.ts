import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";

import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  idUser: number

  posts: Post[]

  constructor(private postServices: PostService) {
  }

  ngOnInit(): void {
    this.postServices.getPosts(this.idUser).subscribe(value => this.posts = value)
  }

}
