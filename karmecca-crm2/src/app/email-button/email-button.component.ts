// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, OnChanges } from "@angular/core";
import { HttpService } from "../Shared/http.service";
import { FormControl, Validators } from "@angular/forms";
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-email-button',
  templateUrl: './email-button.component.html',
  styleUrls: ['./email-button.component.css']
})
export class EmailButtonComponent implements OnInit {

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
  email() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      email: this.emailFormControl
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
}

export function register(uName:string, uEmail: string) {
  console.log("reached register function");
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

// export function xtest() {
//   console.log("reached register function");
//   this.loading = true;
//   this.buttionText = "Submiting...";
//   let user = {
//     email: this.emailFormControl
//   }
//   this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
//     data => {
//       let res:any = data; 
//       console.log(
//         `Reached register method`
//       );
//     },
//     err => {
//       console.log(err);
//       this.loading = false;
//       this.buttionText = "Submit";
//     },() => {
//       this.loading = false;
//       this.buttionText = "Submit";
//     }
//   );
// }
