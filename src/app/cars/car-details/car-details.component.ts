import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {Car} from "../models/car";
import {GlobalEventsService} from "../../global-events.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() selectedCar: Car;
  public users;

  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.users = this.globalEventsService.users;
  }

}
