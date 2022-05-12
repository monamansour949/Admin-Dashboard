import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminFormComponent } from '../AdminForm/adminform.component';
@Component({
  selector: 'app-body',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AdminFormComponent, {
     width : '30%'
    });
  }


  
}
