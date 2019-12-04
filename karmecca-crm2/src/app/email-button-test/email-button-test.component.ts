// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, OnChanges } from "@angular/core";
import { HttpService } from "../Shared/http.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-email-buttons',
  templateUrl: './email-button-test.component.html',
  styleUrls: ['./email-button-test.component.css']
})
export class EmailButtonTestComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  constructor(public http: HttpService) {}

  ngOnInit() {
    console.log(this.http.test);
  }
}
