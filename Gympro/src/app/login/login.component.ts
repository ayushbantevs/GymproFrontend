import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
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
  
 
  // router:string="http://localhost:4200/";
  

  constructor(private fb:FormBuilder, private route:  Router ) {  }


  LoginForm = this.fb.group({
     email: ['', [Validators.required]],
     Password: ['', [Validators.required]]
     
  });
  
  ngOnInit() { 
  
    
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
  // onFormSubmit1(){

  //   this.show=true;
  //   this.show1=false;
  //   this.route.navigate(['login']);
  // }
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



