import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/users/user-detail/user-detail.component";

const routes: Routes = [
  {path:"",component:UsersComponent},
  {path:":id",component:UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
