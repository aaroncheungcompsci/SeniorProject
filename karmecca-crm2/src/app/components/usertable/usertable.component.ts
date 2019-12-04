import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
// import { Observable } from 'rxjs';
import {of} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../models/user.model';
import {MatSort, MatPaginator} from '@angular/material';
import { Observable, of as observableOf, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { DialogData } from '../DialogData';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'category', 'phone', 'venmo', 'car', 'action'];
  constructor(private userService: UserService) { }

  /*applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
// @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
  }

  /*ngAfterInit(): void {
    this.dataSource.sort = this.sort;
  }*/
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}


