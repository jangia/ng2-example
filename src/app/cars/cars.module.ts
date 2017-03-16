import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import {CarsService} from "./cars.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterializeDirective} from "angular2-materialize";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {AddCarComponent} from "./add-car/add-car.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CarDetailsComponent,
    ManageCarsComponent,
    CarsListComponent,
    AddCarComponent,
    MaterializeDirective,

  ],
  exports:[
    ManageCarsComponent
  ],
  providers:[
    CarsService
  ]
})
export class CarsModule { }
