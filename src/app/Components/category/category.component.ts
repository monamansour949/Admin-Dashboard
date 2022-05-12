import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
 categoryList:Icategory[]=[];
  constructor(public dialog: MatDialog,
    private catService:CategoryService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(catList=>{this.categoryList=catList;});
  }
  openDialog() {
    this.dialog.open(CategoryDialogComponent, {
     width : '30%'
    });
  }
  deleteCategory(id:number)
  {

    this.catService.deleteCategory(id).subscribe( cat=>{
      console.log("category deleted");
      this.router.navigate(['/category']);

    });
  }


}
