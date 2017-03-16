import {Component, OnInit} from '@angular/core';
import {GlobalEventsService} from "./global-events.service";
import {USERS, CARS} from "./cars/mocks/mocks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  public users;
  public selectedUser;

  constructor(private globalEventsService: GlobalEventsService){}

  ngOnInit(){
    this.users = this.globalEventsService.users;
    this.selectedUser = this.globalEventsService.selectedUser;

    if (this.globalEventsService.users == null){
      this.globalEventsService.users = USERS;
    }

    if (this.globalEventsService.cars == null){
      this.globalEventsService.cars = CARS;
    }
  }

  setUser(){
    this.globalEventsService.selectedUser = this.selectedUser;
  }

}
