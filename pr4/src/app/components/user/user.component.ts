import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User

  @Output()
  userDetail = new EventEmitter<User>()

  constructor() {
  }

  ngOnInit(): void {
  }

  detail(): void {
    this.userDetail.emit(this.user)
  }
}
