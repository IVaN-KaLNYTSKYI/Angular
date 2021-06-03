import {Component, OnInit} from '@angular/core';
import {UserPostsService} from "../../services/user-posts.service";
import {Post} from "../../../../models/post";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: Post[]

  constructor(private userPostsService: UserPostsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.userPostsService.getUserPosts(+params.id).subscribe(value => this.posts=value)
    })
  }

  ngOnInit(): void {
  }

}
