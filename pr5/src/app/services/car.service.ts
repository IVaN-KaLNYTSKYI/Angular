import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url="http://92.253.239.109//api/v1/cars"
  constructor(private HttpClient:HttpClient) { }
  getCar():Observable<Car[]>{
    return this.HttpClient.get<Car[]>(this.url)
  }
  postCar(body:Car):Observable<Car>{
    return this.HttpClient.post<Car>(this.url,body)
  }

}