import { Component, OnInit ,OnChanges,OnDestroy,EventEmitter, Output} from '@angular/core';
//import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { IProduct } from 'src/app/Models/product';
import { Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CategoryService } from 'src/app/Services/category.service';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList:IProduct[]=[];
  categoryList : Icategory[]=[];
  progress: number=0;
  message: string='null';
  @Output() public onUploadFinished = new EventEmitter();

    constructor(private formBuilder:FormBuilder ,public dialog: MatDialog,
      private prodService:ProductServiceService, private router: Router,
      private catapiservice : CategoryService
    
      ) { }

      openDialog() {
        this.dialog.open(DialogComponent, {
         width : '30%'
        });
      }
     
      openDetailsDialog(id:number){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data=id;
        this.dialog.open(ProductDetailsComponent,dialogConfig);
      }

ngOnChanges(): void {
  
  
 }
    ngOnInit(): void {
      this.prodService.getAllProducts().subscribe(prdList=>{this.productList=prdList;});
      this.catapiservice.getAllCategories().subscribe(catlist=>{this.categoryList=catlist});


    }
    
    deleteProduct(id:number)
    {
  
      this.prodService.deleteProduct(id).subscribe( pro=>{
        console.log("product deleted");
        this.router.navigate(['/product']);

      });
    }
    DecreaseQuantity(prd:IProduct){
      prd.quantity=prd.quantity-1;
    }
  }
  
