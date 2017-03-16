import { Injectable } from '@angular/core';
import {CARS} from "./mocks/mocks";

@Injectable()
export class CarsService {

  constructor() { }

  getCars(){
    return CARS;
  }

}
