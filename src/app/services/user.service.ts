import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {Posts} from "../models/Posts";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url="https://jsonplaceholder.typicode.com/users";
  private urlPosts="https://jsonplaceholder.typicode.com/posts";
  constructor(private httpClient:HttpClient) {

  }
  getUser():Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }
  getPosts():Observable<Posts[]>{
return this.httpClient.get<Posts[]>(this.urlPosts)
  }
}
