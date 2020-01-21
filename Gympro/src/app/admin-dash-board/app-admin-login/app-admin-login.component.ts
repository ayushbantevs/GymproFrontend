import { MatDialogClose } from '@angular/material/dialog';

import { element } from 'protractor';
import { AdminServiceService } from './../../Services/admin-service.service';
import { HttpClient } from '@angular/common/http';
import { LandingPageComponent } from './../../landing-page/landing-page.component';
import { Component, OnInit, Inject, ComponentRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { LoginPageComponent } from 'src/app/landing-page/login-page/login-page.component';
import { Admin } from '../admin';

@Component({
  selector: 'app-app-admin-login',
  templateUrl: './app-admin-login.component.html',
  styleUrls: ['./app-admin-login.component.scss']
})
export class AppAdminLoginComponent implements OnInit {


  validatingForm: FormGroup;
  admin:string;
  ref:ComponentRef<any>;

  constructor(private httpservice:AdminServiceService , private fb:FormBuilder,public dialog: MatDialog, private route:  Router, public dialogRef: MatDialogRef<AppAdminLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Admin) { }

  LoginForm = this.fb.group({
    email: ['', [Validators.required]],
    Password: ['', [Validators.required]]
    
 });

  ngOnInit() {

      this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),   
     });


    
//this.returnUrl = '/dashboard';  
    this.httpservice.logout();  
 }
 loginClick()
 {
   if(this.LoginForm.controls["email"].value=="" || this.LoginForm.controls["Password"].value=="" )
   {
     this.validatingForm.markAsTouched();
   }
   else
   {
    this.httpservice.AppAdminLogin(this.LoginForm.controls["email"].value,this.LoginForm.controls["Password"].value).subscribe((data)=>{   
      
      if(data==1)
      {
        
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', this.LoginForm.controls["email"].value); 
        this.route.navigate(['admindashboard']);
        MatDialogClose;
      //this.route.navigate(['admindashboard'],{ queryParams: { Name: this.LoginForm.controls["email"].value } });
     // this.storage.set(this.admin,this.LoginForm.controls["email"].value);
      }

      else
      {
        this.validatingForm.markAsTouched();
      }

    });
   }
 }

}
