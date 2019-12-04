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
import { DialogData } from '../../DialogData';
import { ModalComponent } from '../../modal/modal.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  users: User[];
  private ELEMENT_DATA;
  public dataSource;
  displayedColumns = ['name', 'email', 'category', 'phone', 'venmo', 'car', 'action'];
  constructor(public dialog: MatDialog, private userService: UserService) { }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
  });


 }
 public sendEmail(){
  register();
}
 public returnRow(id : string)
 {
   return this.users.find(x => x._id === id);
 }
 openDialog(id2:string): void {
  const dialogRef = this.dialog.open(ModalComponent, {
    width: '500px',
    data: {_id:this.returnRow(id2)._id, name: this.returnRow(id2).name, category: this.returnRow(id2).category,
      created_at: this.returnRow(id2).created_at, email:this.returnRow(id2).email, car:this.returnRow(id2).car,
      venmo: this.returnRow(id2).venmo, phone: this.returnRow(id2).phone  }
  });
  
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
