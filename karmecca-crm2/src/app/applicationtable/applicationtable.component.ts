import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ApplicationtableDataSource, ApplicationtableItem } from './applicationtable-datasource';

import { MatCard } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
//import { DialogData } from '../DialogData';


@Component({
  selector: 'app-applicationtable',
  templateUrl: './applicationtable.component.html',
  styleUrls: ['./applicationtable.component.css'],
})
export class ApplicationtableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ApplicationtableItem>;
  dataSource: ApplicationtableDataSource;
  id: number;
  name: string;
  category: string;
  date: string;
  actions: string;
  var: ApplicationtableItem[];

  constructor(public dialog: MatDialog) { }

  public details = '';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'category', 'date', 'actions'];

  ngOnInit() {
    this.dataSource = new ApplicationtableDataSource();
  }
  onClick(){
    console.log('more app details');

    this.details = 'More user application details!';
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  openDialog(id2:number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {id:id2, name: this.dataSource.returnRow(id2).name, category: this.dataSource.returnRow(id2).category,
        date: this.dataSource.returnRow(id2).date, email:this.dataSource.returnRow(id2).email, car:this.dataSource.returnRow(id2).car,
        venmo: this.dataSource.returnRow(id2).venmo, phone: this.dataSource.returnRow(id2).phone  }
    });
  }
}
/*
  id: number;
  name: string;
  category: string;
  date: string ;
  email: string;
  car: string;
  venmo: string;
  phone: string;*/
