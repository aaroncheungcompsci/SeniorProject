import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../Shared/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //pw variable
  pwFormControl = new FormControl("", [
    Validators.required,
  ]);
  //username variable
  unameFormControl = new FormControl("", [
    Validators.required
  ]);

  constructor(public http: HttpService) { }

  ngOnInit() {
    console.log(this.http.test);
  }

  // constructor(){}
  // ngOnInit(){}

  loginUser(event) {
    event.preventDefault()
    console.log(event)
  }

  hide = true;
}
