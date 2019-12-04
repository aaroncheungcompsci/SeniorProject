import { Component, OnInit, OnChanges } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { HttpService } from "../Shared/http.service";

@Component({
  selector: 'app-email-test',
  templateUrl: './email-button-test.component.html',
  styleUrls: ['./email-button-test.component.css']
})

export class EmailTestComponent implements OnInit {
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