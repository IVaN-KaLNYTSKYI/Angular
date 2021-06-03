import {Component, OnInit} from '@angular/core';
import {Comments} from "../../../../models/comments";
import {ActivatedRoute} from "@angular/router";
import {PostCommentsService} from "../../services/post-comments.service";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  comments: Comments[]

  constructor(private postCommentsService: PostCommentsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.postCommentsService.getPostsComments(+params.id).subscribe(value => {
        this.comments = value
      })
    })
  }

  ngOnInit(): void {
  }

}
