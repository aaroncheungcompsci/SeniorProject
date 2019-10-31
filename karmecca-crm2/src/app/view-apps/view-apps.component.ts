import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-apps',
  templateUrl: './view-apps.component.html',
  styleUrls: ['./view-apps.component.css']
})

export class ViewAppsComponent implements OnInit {
  columnsToDisplay = ['name', 'make', 'model', 'year'];
  data = [{name:'John Doe', make:'Toyota', model:'Camry', year:'2017'}, 
                {name:'Jane Smith', make:'Honda', model:'Civic', year:'2020'}, 
                {name:'Peter Parker', make:'Dodge', model:'Charger', year:'2015'},
                {name:'Bruce Wayne', make:'Cool', model:'Batmobile', year:'2025'},
                {name:'Sally Johnson', make:'Fake', model:'Car', year:'2018'}];

  dataSource = new MatTableDataSource(this.data);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
