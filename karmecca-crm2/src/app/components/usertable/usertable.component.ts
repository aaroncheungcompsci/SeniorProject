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
import { ModalComponent } from '../../modal/modal.component';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { AddFormComponent } from '../../add-form/add-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from "../../Shared/http.service";

// import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  users: User[];

  loading = false;
  buttionText = "Submit";

  usertoAdd: User =
  {
    _id: '', name: '', category: '', created_at:'',email:'',phone:'',car:'',venmo:'', approved: ''
  };
  usertoModal: User =
  {
    _id: '', name: '', category: '', created_at:'',email:'',phone:'',car:'',venmo:'', approved: ''
  };

  private ELEMENT_DATA;
  public dataSource;

  displayedColumns = ['name', 'email', 'category', 'phone', 'venmo', 'car', 'action'];
  constructor(public dialog: MatDialog, private userService: UserService, public http: HttpService) { }

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Karmecca Applicant List',
    useBom: true,
    noDownload: false,
    headers: ["Car", "ID", "Created At", "Name", "Email", "Category", "Phone", "Venmo", "Status"]
  };


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
 public returnRow(id : string)
 {
   return this.users.find(x => x._id === id);
 }
  sendEmail(emailID : string): void{
    console.log("Button has been clicked.");
    this.email(this.returnRow(emailID).name, this.returnRow(emailID).email);
  }

  email(uName:String, uEmail:string) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: uName,
      email: uEmail
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data;
        console.log(
          `Reached register method`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }

 openDialog(id2:string): void {
  this.usertoModal._id = this.returnRow(id2)._id;
  this.usertoModal.name = this.returnRow(id2).name;
  this.usertoModal.category = this.returnRow(id2).category;
  this.usertoModal.created_at = this.returnRow(id2).created_at;
  this.usertoModal.email = this.returnRow(id2).email;
  this.usertoModal.car = this.returnRow(id2).car;
  this.usertoModal.venmo = this.returnRow(id2).venmo;
  this.usertoModal.phone = this.returnRow(id2).phone;
  this.usertoModal.approved = this.returnRow(id2).approved;

  console.log(this.usertoModal);
  const dialogRef = this.dialog.open(ModalComponent, {
    width: '500px',
    data: this.usertoModal
  });

    dialogRef.afterClosed().subscribe(result =>
      {
        this.usertoModal = result;
        this.editUser(this.usertoModal);
  
      })
  }

  openForm(): void {
    const dialogRef = this.dialog.open(AddFormComponent, {
      width: '1000px',
      data: {user: this.usertoAdd}
    });

    dialogRef.afterClosed().subscribe(result =>
    {
      //console.log(result.user);
      //console.log(this.usertoAdd);
      this.usertoAdd = result.user;
      this.addUser(this.usertoAdd);
      
    })
  }
  addUser(userAdding : User)
  {
    this.userService.addUser(this.usertoAdd)
    .subscribe((data : User[]) => this.users = data);
  }
  //Delete User
  deleteUser(idToDelete: String)
  {
    this.userService.deleteUser(idToDelete).subscribe();
  }

  downloadCSV(){
    console.log("button pressed");
    new AngularCsv(this.users, "KarmeccaApplicantList", this.csvOptions);
  }
  editUser(userToEdit : User)
  {
    this.userService.editUser(this.usertoModal)
    .subscribe((data: User[]) => this.users = data);
  }
  /*ngAfterInit(): void {
    this.dataSource.sort = this.sort;
  }*/
  export(){

  }
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
