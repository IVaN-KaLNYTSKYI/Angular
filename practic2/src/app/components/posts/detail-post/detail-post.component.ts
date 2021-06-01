import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../models/Post";
import {PostIdService} from "../../../services/post-id.service";

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  post: Post

  constructor(private userIdService:PostIdService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value)
      this.post = this.router.getCurrentNavigation()?.extras.state as Post;
      if(!this.post){
        this.userIdService.getPostId(value.id).subscribe(value1 => this.post=value1)
      }
      console.log(this.post);
    })
  }

  ngOnInit(): void {
  }

}
