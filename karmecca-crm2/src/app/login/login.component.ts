import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../Shared/http.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Original Credentials:
  //realUsername= "officialpurevip@gmail.com";
  //realPassword = "CarShow2020!";
  realUsername = "test";
  realPassword = "test";

  //pw variable
  pwFormControl = new FormControl("", [
    Validators.required,
  ]);
  //username variable
  unameFormControl = new FormControl("", [
    Validators.required,
  ]);

  constructor(public http: HttpService, private router: Router) { }

  ngOnInit() {
    console.log(this.http.test);
  }

  // constructor(){}
  // ngOnInit(){}

  loginUser(event) {
    event.preventDefault()
    console.log(event)
  }

  login(){
    var inputpw :String = this.pwFormControl.value;
    var inputname :String = this.unameFormControl.value;
    inputname = inputname.toLowerCase();

    if(inputname == this.realUsername && inputpw == this.realPassword){
      this.router.navigateByUrl('/home');
    }
  }

  hide = true;
}
