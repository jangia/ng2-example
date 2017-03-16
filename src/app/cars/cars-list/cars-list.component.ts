import {Component, OnInit, EventEmitter} from '@angular/core';
import {CarsService} from "../cars.service";
import {Car} from "../models/car";
import {Output, Input} from "@angular/core/src/metadata/directives";
import {GlobalEventsService} from "../../global-events.service";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[];

  @Output() selectCar = new EventEmitter();
  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(){
    this.cars = this.globalEventsService.cars;
  }
  onCarSelect(car){
    this.selectCar.emit(car);
  }

}
