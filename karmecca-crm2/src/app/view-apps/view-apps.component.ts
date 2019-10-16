import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-apps',
  templateUrl: './view-apps.component.html',
  styleUrls: ['./view-apps.component.css']
})
export class ViewAppsComponent implements OnInit {
  columnsToDisplay = ['name', 'make', 'model', 'year'];
  dataSource = [{name:'John Doe', make:'Toyota', model:'Camry', year:'2017'}, 
                {name:'Jane Smith', make:'Honda', model:'Civic', year:'2020'}, 
                {name:'Peter Parker', make:'Dodge', model:'Charger', year:'2015'},
                {name:'Bruce Wayne', make:'Cool', model:'Batmobile', year:'2025'},
                {name:'Sally Johnson', make:'Fake', model:'Car', year:'2018'}];

  constructor() { }

  ngOnInit() {
  }

}
