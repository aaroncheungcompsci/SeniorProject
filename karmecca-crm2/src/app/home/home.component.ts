import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../Shared/http.service";
import { User } from '../models/user.model';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UserService } from '../services/user.service';
import { findSafariExecutable } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //declare arrays for Different applications
  users: User[];
  // approved: User[];
  // rejected: User[];
  // pending: User[];

  //Initializing the string types
  statusA = "Accepted";
  statusR = "Rejected";
  statusP = "Pending";

  //created the User enum
  usertoAdd: User =
  {
    _id: '', name: '', category: '', created_at:'',email:'',phone:'',car:'',venmo:'', approved: '',
  };

  constructor(private userService: UserService,public http: HttpService) {}

  ngOnInit() {
    console.log(this.http.test);
    this.userService.getUser()
  .subscribe(data =>this.users = data);
  }

  // constructor(){}
  // ngOnInit(){}
}
