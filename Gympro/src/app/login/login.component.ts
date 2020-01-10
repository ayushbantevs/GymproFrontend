import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show:boolean=true;
  show1:boolean=true;
  validatingForm: FormGroup;

  constructor(private fb:FormBuilder, private route:  Router ) {  }

  // imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},
  // {url:'../assets/Images/pexels-photo-1954524.jpeg'},
  // {url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];

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
  
  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }



  loginClick()
  {
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
  onFormSubmit1(){
     this.show=true;
    this.show1=false;
    this.route.navigate(['login']);
  }
  public openuserpage()
  {
    var myurl = `${'http://localhost:4200/register'}`;
    this.route.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
}
}



