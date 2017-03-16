import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterializeModule, MaterializeDirective} from 'angular2-materialize';

import { AppComponent } from './app.component';
import {CarsModule} from "./cars/cars.module";
import { AddCarComponent } from './cars/add-car/add-car.component';
import {RouterModule} from "@angular/router";
import { AddUserComponent } from './add-user/add-user.component';
import {GlobalEventsService} from "./global-events.service";
import {Ng2Webstorage} from "ng2-webstorage";
import { UsersListComponent } from './users-list/users-list.component';
import {AuthGuardService} from "./auth-guard.service";
import { NotAllowedComponent } from './not-allowed/not-allowed.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UsersListComponent,
    NotAllowedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    RouterModule,
    Ng2Webstorage,
  ],
  providers: [GlobalEventsService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
