import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginStatus = false;
  signup=false;
  invalidLogin:boolean=true;
  loginForm:FormGroup=new FormGroup({
    'email':new FormControl(null,[Validators.required]),
    'password':new FormControl(null,[Validators.required])
    })
    
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
 /*  LogIn(){
    this.loginservice.SignIn({
      userName:this.loginForm.value.email,
      password:this.loginForm.value.password
    }).subscribe(
      res=>{
        const token=(<any>res).token;
        localStorage.setItem("jwt",token);
        this.invalidLogin=false;
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl||"/"]);

      },
      err=>{
        this.invalidLogin=true
      }
    )
  } */
/*   onlink(){
    this.loginStatus = false;
  } */
}
