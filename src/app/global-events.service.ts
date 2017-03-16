import { Injectable } from '@angular/core';
import {USERS, CARS} from "./cars/mocks/mocks";
import {LocalStorage} from 'ng2-webstorage';
import {Car} from "./cars/models/car";

@Injectable()
export class GlobalEventsService {

  @LocalStorage('users')
  public users: Array<string>;

  @LocalStorage('cars')
  public cars : Array<Car>;

  @LocalStorage('selectedUser')
  public selectedUser: string;

  constructor() { }

  addUser(user: string){
    let users = this.users;
    users.push(user);

    this.users = users;
  }

  addCar(car: Car){
    let cars = this.cars;
    cars.push(car);

    this.cars = cars;
  }

}
