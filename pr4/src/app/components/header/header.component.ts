import {Component, OnInit} from '@angular/core';
import {UserBehaviorSubjectService} from "../../services/user-behavior-subject.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private userBehavior: UserBehaviorSubjectService) {
  }

  ngOnInit(): void {
  }
  name(){
    return this.userBehavior.userName.getValue()
  }

}
