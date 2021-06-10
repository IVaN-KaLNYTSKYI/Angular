import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Car} from "../../model/car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[]

  modelControl = new FormControl("")
  priceControl = new FormControl(0)
  yearControl = new FormControl(0)

  myFormGroup: FormGroup = new FormGroup({
    model: this.modelControl,
    price: this.priceControl,
    year: this.yearControl
  })

  constructor(private carService: CarService) {
    this.carService.getCar().subscribe(value => {
      this.cars = value
      console.log(value)
    })
  }

  ngOnInit(): void {

  }

  add():void{
    console.log(this.myFormGroup.value)
    this.carService.postCar(this.myFormGroup.value).subscribe(value => {
      console.log(value)
      this.carService.getCar().subscribe(value1 => this.cars=value1)
    })

  }
}
