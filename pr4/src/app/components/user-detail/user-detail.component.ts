import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserBehaviorSubjectService} from "../../services/user-behavior-subject.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User

  constructor(private userBehavior: UserBehaviorSubjectService) {
  }

  ngOnInit(): void {
  }
  log():void{
    this.userBehavior.userName.next(this.user.name)
    console.log(this.userBehavior.userName.getValue())
  }
}
