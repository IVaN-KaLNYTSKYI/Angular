import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CarsComponent } from './components/cars/cars.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CarService} from "./services/car.service";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
