import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, CheckboxRequiredValidator } from "@angular/forms";
import { HttpService } from "../Shared/http.service";
import { User } from '../models/user.model';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UserService } from '../services/user.service';
import { findSafariExecutable } from 'selenium-webdriver/safari';
import {DataSource} from '@angular/cdk/collections';
import {MatSort, MatPaginator} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  length: any;
  users: User[];
  approved: number = 60;
  pending: number= 30;
  rejected: number = 10;
  total: number = 100;
  private ELEMENT_DATA;
  public dataSource;

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

  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.userService.getUser()
  .subscribe(data =>this.users = data);

  this.userService.getUser().subscribe(results => {
    if(!results) return;
    this.ELEMENT_DATA = results;
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  })

  //multiply by 100 then divide by total applications to get percentage value
  this.approved = this.approved*100/this.total;
  this.pending = this.pending*100/this.total;
  this.rejected = this.rejected*100/this.total;

  // this.approved=50;
  // this.pending=40;
  // this.rejected=10;
    console.log(this.users);
  
  }

}

