import { Component, OnInit } from '@angular/core';
import {GlobalEventsService} from "../global-events.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users;
  constructor(private globalEventsService: GlobalEventsService) { }

  ngOnInit() {
    this.users = this.globalEventsService.users;
  }

}
