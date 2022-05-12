import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/product';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productList:IProduct[]=[];
  product :IProduct={} as IProduct

 
    constructor(private proAPIservise:ProductServiceService
      ,private dialogRef: MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:number
  ) { }

  ngOnInit(): void {
   console.log(this.data);
    //this.prodService.getAllProducts().subscribe(prdList=>{this.productList=prdList;});
    this.proAPIservise.getProductById(this.data).subscribe(prd=>{this.product=prd});
  }

}
