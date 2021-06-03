import {Component, OnInit} from '@angular/core';
import {PostIdService} from "../../services/post-id.service";
import {Post} from "../../models/post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post

  constructor(private postIdService: PostIdService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.postIdService.getPostId(params.id).subscribe(value => {
        this.post=value
      })
    })
  }

  ngOnInit(): void {
  }

}
