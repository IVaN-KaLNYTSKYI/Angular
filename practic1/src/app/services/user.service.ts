import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://jsonplaceholder.typicode.com/users"

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }

}
