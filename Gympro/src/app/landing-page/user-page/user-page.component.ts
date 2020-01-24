import { User } from './../user';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { RegistrationService } from '../../Services/registration.service';
import { FileInput } from 'ngx-material-file-input';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
//import{ ImageData } from './user-page.component';
//import { User } from '../user';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  providers: [DatePipe]
})
export class UserPageComponent implements OnInit {

  myDate = new Date();
 
  myimg:string;
  file:boolean=true;
  public imagePath;
  imgURL: any;
  public message: string;
  value:string;
 imag:any;
 mydate:any;
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;   
    }
    // this.imag=files[0];
    reader.onloadend=(_event)=>
    {
       this.file=false;
    }
  
  }
  
  

  @Output() otp = new EventEmitter();

  // allloginform:boolean=true;

  
  constructor(private fb: FormBuilder,private router: Router,private datePipe: DatePipe, private httpservice: RegistrationService,
               private httpclient:HttpClient)
       {

        
      }

      user_register = this.fb.group({
    
      user_id: ['', [Validators.required]],
      profileImage:[''],
      user_name: ['', [Validators.required]],
      user_mailId: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      user_contact_no: ['', [Validators.required,Validators.pattern(/^[6-9]\d{9}$/) ]],
      Gender:['',[Validators.required]],
      Contact_Number:['',[Validators.required]],
      date:['',[Validators.required]],
      user_age: ['', [Validators.required]],
      city: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      pincode: ['', [Validators.required]],
      Ragistration_date: ['', [Validators.required]],
      User_Location_Logitude: ['', [Validators.required]],
      User_Location_Latitude: ['', [Validators.required]],});

  ngOnInit() {}

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }
  _keyPress1(event: any)
   {
    const pattern = /^[a-zA-Z \-\']+/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }

  

  onFormSubmit()
  {
     var user=new User();

      user.User_Id=this.user_register.controls['user_id'].value;
      user.User_Name=this.user_register.controls['user_name'].value;
      user.User_Mail_Id=this.user_register.controls['user_mailId'].value;
      user.Password=this.user_register.controls['Password'].value;
      user.Gender=this.user_register.controls['Gender'].value;
      user.DateOfBIrth=this.user_register.controls['date'].value;
      user.Contact_Number=this.user_register.controls['user_contact_no'].value;

      this.mydate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm:ss');
      
      user.Ragistration_date=this.mydate;
      user.User_Location_Logitude=this.user_register.controls['User_Location_Logitude'].value;
      user.User_Location_Latitude=this.user_register.controls['User_Location_Latitude'].value;
      user.User_Age=this.user_register.controls['user_age'].value;
      user.city=this.user_register.controls['city'].value;
      user.pincode=this.user_register.controls['pincode'].value;
      user.User_Image=this.imgURL;
      //  console.log(user);


    
    this.httpservice.Adduser(user).subscribe((data)=>{
    });
     // alert(""); 

  }


backtoLogin()
 {
   this.otp.emit();
 }

 myfun()
  {
    console.log("image added");
    
  }
}

