import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { RegistrationService } from '../../Services/registration.service';
import { User } from '../user';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  //myimg:string;
  file:boolean=true;
  public imagePath;
  imgURL: any;
  public message: string;
 
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
    reader.onloadend=(_event)=>
    {
       this.file=false;
    }
  
  }
  

  @Output() otp = new EventEmitter();

  // allloginform:boolean=true;


  constructor(private fb: FormBuilder,
    private router: Router,
   // private service: RegistrationService,
    private httpservice: RegistrationService) { }

    user_register = this.fb.group({
    
      user_id: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      user_mailId: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      user_contact_no: ['', [Validators.required]],
      
      user_age: ['', [Validators.required]],
      //user_address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]]
     
    });

  ngOnInit() {
  }


  

  onFormSubmit()
  {
     var user=new User();
     user.User_Name=this.user_register.controls['user_name'].value;
     user.User_Mail_Id=this.user_register.controls['user_mailId'].value;
     user.Password=this.user_register.controls['Password'].value;
     user.Contact_Number=this.user_register.controls['user_contact_no'].value;
     user.User_Age=this.user_register.controls['user_age'].value;
     user.city=this.user_register.controls['city'].value;
     user.pincode=this.user_register.controls['pincode'].value;


    this.httpservice.Adduser(user).subscribe((data)=>{
    });
      alert(""); 

  }


backtoLogin()
 {
   this.otp.emit();
 }

 myfun()
  {
    console.log("image added");
    //var imgg =document.getElementsByName("myimg1") ;
  }
  click()
  {
     this.file=true;
  }

  
}

