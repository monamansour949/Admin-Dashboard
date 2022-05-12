import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/product';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  currProduct :IProduct={} as IProduct;

  constructor( private dialog: MatDialogRef<DeleteComponent>,

    @Inject(MAT_DIALOG_DATA) public data: number, private prdAPIService:ProductServiceService,private router:Router) {
  }

  ngOnInit() {

  }



  onDelete(): void {

    this.prdAPIService.deleteProduct(this.data).subscribe( pro=>{

      console.log("product is deleted succesfully");

    });

   

  }}
