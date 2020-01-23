import { User } from './../user';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpEventType } from '@angular/common/http';
//import { RegistrationService } from '../../Services/registration.service';
import { FileInput } from 'ngx-material-file-input';
//import{ ImageData } from './user-page.component';
//import { User } from '../user';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
constructor(private fb: FormBuilder,
            private router: Router,
          // private httpservice: RegistrationService,
            private httpclient: HttpClient) { }

  
 
  myimg:string;
  file:boolean=true;
  public imagePath;
  imgURL: any;
  public message: string;
  value:string;
  
  

  @Output() otp = new EventEmitter();

      // tslint:disable-next-line: variable-name
      user_register = this.fb.group ({
      user_id: ['', [Validators.required]],
      profileImage:[''],
      user_name: ['', [Validators.required]],
      user_mailId: ['', [Validators.required]],
      Password: ['', [Validators.required,Validators.maxLength(8)]],
      user_contact_no: ['', [Validators.required]],
      Gender:['',[Validators.required]],
      Contact_Number:['',[Validators.required]],
      date:['',[Validators.required]],
      user_age: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      Ragistration_date: ['', [Validators.required]],
      User_Location_Logitude: ['', [Validators.required]],
      User_Location_Latitude: ['', [Validators.required]]});

  preview(files) {
    if (files.length === 0) {
      return;
    }

    // tslint:disable-next-line: prefer-const
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // tslint:disable-next-line: variable-name
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };

    // tslint:disable-next-line: variable-name
    reader.onloadend = ( _event) => {
       this.file = false;
     }
  }

  ngOnInit() {}


  

  onFormSubmit()
  {
     var user=new User();

     user.User_Id=this.user_register.controls.user_id.value;
     user.User_Name=this.user_register.controls.user_name.value;
     user.User_Mail_Id=this.user_register.controls.user_mailId.value;
     user.Password=this.user_register.controls.Password.value;
     user.Gender=this.user_register.controls.Gender.value;
     user.DateOfBIrth=this.user_register.controls.date.value;
     user.Contact_Number=this.user_register.controls.user_contact_no.value;
     user.Ragistration_date=this.user_register.controls.Ragistration_date.value;
     user.User_Location_Logitude=this.user_register.controls.User_Location_Logitude.value;
     user.User_Location_Latitude=this.user_register.controls.User_Location_Latitude.value;
     user.User_Age=this.user_register.controls.user_age.value;
     user.city=this.user_register.controls.city.value;
     user.pincode=this.user_register.controls.pincode.value;
     user.User_Image=this.imgURL;
     console.log(user);

    //  this.httpservice.Adduser(user).subscribe((data)=>{
    // });
     // alert(""); 

  }


backtoLogin()
 {
   this.otp.emit();
 }

 myfun() {
    console.log('image added');
  // click()
  // {
  //    this.file=true;
  // }

  }
}
