//import { UserData } from './../../admin-dash-board/notifications/notifications.component';
import { UserData } from './../../gymuser/navigation/gymlist/gymlist/gymlist.component';
import { Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { UserPageComponent } from './../user-page/user-page.component';
import { GymPageComponent } from './../gym-page/gym-page.component';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistrationService } from '../../Services/registration.service';
//import{LoginPageComponent} from './../login-page/login-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  showLogin:boolean=true;
  showRegister:boolean=false;
  showuser:boolean=false;
  show:boolean=true;
  show1:boolean=false;
  validatingForm: FormGroup;
  showForgotPassword:boolean=false;

  allloginform:boolean=true;
  DataSource: any;

  constructor(private httpservice:RegistrationService, private fb:FormBuilder,public dialog: MatDialog, private route:  Router, public dialogRef: MatDialogRef<LoginPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    LoginForm = this.fb.group({
    user_name: ['', [Validators.required]],
    Password: ['', [Validators.required]]
    
 });

  ngOnInit() {

    this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
       signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),
  });

  // localStorage.setItem('dataSource', this.DataSource.length);
  // console.log(localStorage.getItem('dataSource'));


  }
  onNoClick():void {
    this.dialogRef.close();
  }

  loginClick()
  {
    //alert(this.LoginForm.controls["user_name"].value+" "+this.LoginForm.controls["Password"].value);
     if(this.LoginForm.controls["user_name"].value=="" || this.LoginForm.controls["Password"].value=="")
     {
         this.LoginForm.markAllAsTouched();
     }
     else
     {

       
          let str =this.LoginForm.controls["user_name"].value;
          let x = str.split("-");
          console.log(x[0]);
          if(x[0]=="USER")
          {
            this.httpservice.AddLogin(this.LoginForm.controls["user_name"].value,this.LoginForm.controls["Password"].value).subscribe(data=>{
              console.log(data);
           })
          }
          if(x[0]="GYM")
          {
             console.log("GYm");
          }
         if(x[0]!="USER" || x[0]!="GYM")
           {
                console.log("amar");
           }
          
       
     }

     this.show=true;
  }
  RegisterClick() { 
      this.show=false;
      this.show1=true;
  }
  showform(){
    this.show=true;
    this.show1=false;
  }
  // onFormSubmit1(){
  //    this.show=true;
  //   this.show1=false;
  //  this.route.navigate(['login']);
  // }
  public openuserpage()
  {
    this.show1=false;
  }
  funUserRegClick():void
  {

      this.showuser=true;
      this.showLogin=false;
}
  funGymUserRegClick():void{

  this.showRegister=true;
  this.showLogin=false;
 };
   

 


  GymLogin()
  {
     this.showLogin=true;
    // this.show=true;
    // this.show1=false;
     this.showRegister=false;
  }

  UserLogin()
  {
     this.showLogin=true;
     this.show=true;
     this.show1=false;
     this.showuser=false;
  }

  forgetPassword()
  {
   
    this.showLogin=false;
    this.showForgotPassword=true; 
     this.show=false;
     this.show1=false;
  }
  Forgot()
  {
    this.show=true;
    this.showForgotPassword=true; 
    this.showLogin=true;
    this.showForgotPassword=false; 
  }
}
