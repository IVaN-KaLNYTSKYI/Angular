import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserIdService} from "../../../services/user-id.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User

  constructor(private activatedRoute: ActivatedRoute, private userIdService: UserIdService) {
    this.activatedRoute.params.subscribe(params => {
      this.userIdService.getUsersId(params.id).subscribe(value =>{
        this.user=value
        })
    })
  }

  ngOnInit(): void {
  }

}
