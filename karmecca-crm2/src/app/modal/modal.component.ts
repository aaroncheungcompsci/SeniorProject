// modal.component.ts

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from '../models/user.model';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private show = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onApprove(): void {

    this.userService.approveUser(this.data).subscribe(data => {console.log("PUT Request is successful ", data);});
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.userService.rejectUser(this.data).subscribe(data => {console.log("PUT Request is successful ", data);});
    this.dialogRef.close();
  }
  onEdit() {
    this.show = !this.show;
  }
  ngOnInit() {
    
  }

}
