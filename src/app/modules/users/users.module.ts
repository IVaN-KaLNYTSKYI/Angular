import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/users/user/user.component';
import {UserDetailComponent} from './components/users/user-detail/user-detail.component';
import {UserIdService} from "./services/user-id.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, UserIdService]
})
export class UsersModule {
}
