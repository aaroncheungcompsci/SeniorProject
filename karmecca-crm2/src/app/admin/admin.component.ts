import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  adminUser(event) {
    event.preventDefault();
    console.log(event);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.toggle()
    });
  }
  toggle() {
    this.show = !this.show;
  }
}
