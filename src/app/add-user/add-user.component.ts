import { Component, OnInit } from '@angular/core';
import {GlobalEventsService} from "../global-events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public newUser: string;

  constructor(private globalEventsService: GlobalEventsService, private router: Router) { }

  ngOnInit() {
  }

  addUser(){
    this.globalEventsService.addUser(this.newUser);
    this.router.navigateByUrl('/')
  }

}
