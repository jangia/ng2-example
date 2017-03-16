import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car";
import {GlobalEventsService} from "../../global-events.service";
import {USERS} from "../mocks/mocks";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-car',
  templateUrl: 'add-car.component.html',
  styleUrls: ['add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public newCar: Car = new Car('', '', null, '', 'No owner');
  public users = USERS;
  constructor(private globalEventsService: GlobalEventsService, private router: Router) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users = this.globalEventsService.users;
  }

  addCar(){
    this.globalEventsService.addCar(this.newCar);
    this.router.navigateByUrl('/')
  }
}
