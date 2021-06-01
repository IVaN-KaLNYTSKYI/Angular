import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {UserIdService} from "./user-id.service";

@Injectable({
  providedIn: 'root'
})
export class PostService implements Resolve<Observable<Post[]>>{

  constructor(private httpClient:HttpClient,private user:UserIdService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Post[]>> | Promise<Observable<Post[]>> | Observable<Post[]> {
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
