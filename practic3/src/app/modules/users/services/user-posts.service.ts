import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../models/user";
import {Post} from "../../../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {


  private url = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private httpClient: HttpClient) {
  }

  getUserPosts(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + id + "/posts");
  }
}
