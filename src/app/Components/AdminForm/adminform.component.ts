import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-mysidenav',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.scss']
})
export class AdminFormComponent implements OnInit {
  hide = true;
  AdminForm !: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private formBuilder:FormBuilder) { 
    this.AdminForm=this.formBuilder.group({
      adminFullName:['',Validators.required]
      ,adminUserName: ['', Validators.required],
      adminPassword : ['',Validators.required],
      adminEmail :['',Validators.required],
   
    })
  }
  addAdmin(){
    console.log(this.AdminForm.value);
  }
  ngOnInit(): void {
  }

}
