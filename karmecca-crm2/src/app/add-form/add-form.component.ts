import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from '../models/user.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onApprove(): void {
    //this.data.category = "Approved";
    this.dialogRef.close();
  } 
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
