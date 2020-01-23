import { UserPageComponent } from './../user-page/user-page.component';
import { GymPageComponent } from './../gym-page/gym-page.component';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import{LoginPageComponent} from './../login-page/login-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  showLogin = true;
  showRegister = false;
  showuser = false;
  show = true;
  show1 = false;
  validatingForm: FormGroup;

  allloginform: true;
  submitted:false;

  constructor(private fb:FormBuilder,public dialog: MatDialog, private route:  Router, public dialogRef: MatDialogRef<LoginPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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

  

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  loginClick()
  {
     this.show = true;
    //  this.submitted = true;

    //  // stop here if form is invalid
    //  if (this.validatingForm.invalid) {
    //      return;
    //  }

    //  this.loading = true;
    //  this.authenticationService.login(this.fb.username.value, this.fb.password.value)
    //      .pipe(first())
    //      .subscribe(
    //          data => {
    //              this.router.navigate([this.returnUrl]);
    //          },
    //          error => {
    //              this.alertService.error(error);
    //              this.loading = false;
    //          });
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

  //   const dialogRef = this.dialog.open(GymPageComponent, {
  //     height:'60%',
  //    width: '70%',
  //  data: {name: '', animal: ''}
  this.showRegister=true;
  this.showLogin=false;
 };
   

 


  GymLogin()
  {
     this.showLogin=true;
     this.show=true;
     this.show1=false;
     this.showRegister=false;
  }

  UserLogin()
  {
     this.showLogin=true;
     this.show=true;
     this.show1=false;
     this.showuser=false;
  }
}
