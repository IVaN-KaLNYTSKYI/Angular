import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserBehaviorSubjectService {

  userName=new BehaviorSubject<string>("anonymous")
  constructor() { }
}
