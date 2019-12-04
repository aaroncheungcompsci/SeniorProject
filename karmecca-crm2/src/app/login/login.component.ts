import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    console.log(event)
  }
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
}
