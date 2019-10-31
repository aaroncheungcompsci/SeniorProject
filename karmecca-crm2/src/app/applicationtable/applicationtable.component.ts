import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ApplicationtableDataSource, ApplicationtableItem } from './applicationtable-datasource';

@Component({
  selector: 'app-applicationtable',
  templateUrl: './applicationtable.component.html',
  styleUrls: ['./applicationtable.component.css']
})
export class ApplicationtableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ApplicationtableItem>;
  dataSource: ApplicationtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'category', 'date', 'actions'];

  ngOnInit() {
    this.dataSource = new ApplicationtableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
