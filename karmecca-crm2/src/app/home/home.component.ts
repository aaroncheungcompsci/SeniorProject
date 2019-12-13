import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, CheckboxRequiredValidator } from "@angular/forms";
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
  length: any;
  users: User[];
  approved: number = 40;
  pending: number= 15;
  rejected: number = 25;
  total: number = 100;

  statusA="Approved";
  statusP="Pending";
  statusR="Rejected";

  loading = false;
  buttionText = "Submit";

  usertoAdd: User =
  {
    _id: '', name: '', category: '', created_at:'',email:'',phone:'',car:'',venmo:'', approved: ''
  };

  constructor(private userService: UserService,public http: HttpService) {}

  ngOnInit() {
    this.userService.getUser()
  .subscribe(data =>this.users = data);

  //multiply by 100 then divide by total applications to get percentage value
  this.approved = this.approved*100/this.total;
  this.pending = this.pending*100/this.total;
  this.rejected = this.rejected*100/this.total;

  // this.approved=50;
  // this.pending=40;
  // this.rejected=10;
  }
}
