import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  constructor(public dialog: MatDialog ,private observer: BreakpointObserver, private router: Router) {}



  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
     width : '30%'
    });
  }
}
