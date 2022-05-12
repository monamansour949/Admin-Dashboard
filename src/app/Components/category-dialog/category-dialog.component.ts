import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {
  categoryDialog !: FormGroup;
  NewCategory :Icategory={} as Icategory
  constructor(private formBuilder:FormBuilder, private router :Router,private catService: CategoryService) { 
    this.categoryDialog=this.formBuilder.group({
      categoryId:['',Validators.required]
      ,categoryName: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }
  addCategory(){
    this.NewCategory.id=1;
    this.NewCategory.name=this.categoryDialog.value.categoryName;
    this.catService.addCaregory(this.NewCategory).subscribe(p=>{
    this.router.navigate(['/category']);
    });
    console.log(this.categoryDialog.value);
  }
}
