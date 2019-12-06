// modal.component.ts

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from '../models/user.model';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onApprove(): void {
    this.data.category = "Approved";
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
