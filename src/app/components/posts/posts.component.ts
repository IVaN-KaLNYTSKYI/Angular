import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Posts} from "../../models/Posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPosts().subscribe(value =>this.posts=value )
  }

}
