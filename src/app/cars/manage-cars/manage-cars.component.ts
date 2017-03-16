import {Component, OnInit, Input} from '@angular/core';
import {Car} from "../models/car";
import {CarsService} from "../cars.service";
import {USERS} from "../mocks/mocks";

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.css']
})
export class ManageCarsComponent implements OnInit {

  public cars: Car[];
  public selectedCar: Car;
  public users = USERS;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.getCars()
  }

  onCarSelect(car){
    this.selectedCar = car;
  }

  getCars(){
    return this.carsService.getCars();
  }

}
