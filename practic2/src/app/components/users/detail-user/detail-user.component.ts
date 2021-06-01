import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../models/Post";
import {User} from "../../../models/User";
import {PostIdService} from "../../../services/post-id.service";
import {UserIdService} from "../../../services/user-id.service";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user: User

  constructor(private userIdService:UserIdService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value)
      this.user = this.router.getCurrentNavigation()?.extras.state as User;
      if(!this.user){
        this.userIdService.getUserId(value.id).subscribe(value1 => this.user=value1)
      }
      console.log(this.user);
    })
  }

  ngOnInit(): void {
  }

}
