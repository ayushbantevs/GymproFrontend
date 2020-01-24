

import { Subscription } from 'rxjs';

import { Component, OnInit, EventEmitter,Output} from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators,Form} from '@angular/forms'
import { Router, provideRoutes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistrationService } from '../../Services/registration.service';
import { Gymowner } from '../gymowner';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-gym-page',
  templateUrl: './gym-page.component.html',
  styleUrls: ['./gym-page.component.scss'],
  providers: [DatePipe]
})
export class GymPageComponent implements OnInit {

  myDate = new Date();

  value:string;
  mydate:any;
 
  @Output() otp = new EventEmitter();

  //public  Gym_register:FormGroup;

  constructor(private fb: FormBuilder,
    private httpservice: RegistrationService,
    private http: HttpClient,
    private datePipe:DatePipe,
    private route: Router,public dialog: MatDialog) { }

    Gym_register=this.fb.group({

     // Gym_Id: ['', [Validators.required]],
      gym_Name : ['', [Validators.required]],
      gym_owner_Name : ['', [Validators.required]],
      gym_address :['', [Validators.required]],
      phone_number : ['', [Validators.required]],
      email_id :['', [Validators.required]],
     
      password : ['', [Validators.required]],
      
      pincode :['', [Validators.required]],
      website : ['', [Validators.required]],
      certificate_no :['', [Validators.required]],
      service_tax :['', [Validators.required]],
      dateOfBirth : ['', [Validators.required]],
      Gst_no : ['', [Validators.required]],
      Gym_Location_longitude : ['', [Validators.required]],
      Gym_Location_latitude : ['', [Validators.required]],
      // Company_Registration_Date:['', [Validators.required]],
  
  
    });
   
    
    
 ngOnInit(){}

  backtoLogin()
  {
     this.otp.emit();
  }




  onFormSubmit()

 {
      var gymowner=new Gymowner();
      //gymowner.Gym_Id=this.Gym_register.controls['gym_id'].value;
      gymowner.Gym_Name=this.Gym_register.controls['gym_Name'].value;
      gymowner.Gym_Owner_Name=this.Gym_register.controls['gym_owner_Name'].value;
      gymowner.Gym_Address=this.Gym_register.controls['gym_address'].value;
      gymowner.Gym_Pincode=this.Gym_register.controls['pincode'].value;
      gymowner.PhoneNumber=this.Gym_register.controls['phone_number'].value;
      gymowner.Gym_Website=this.Gym_register.controls['website'].value;
      gymowner.Gym_MailId=this.Gym_register.controls['email_id'].value;
      gymowner.Gym_Registration_Date=this.Gym_register.controls['dateOfBirth'].value;
      gymowner.Password=this.Gym_register.controls['password'].value;
      gymowner.Gym_Certification_Number=this.Gym_register.controls['certificate_no'].value;
      //gymowner.Gym_Location_longitude=this.Gym_register.controls['Gym_Location_longitude'].value;
     // gymowner.Gym_Location_latitude=this.Gym_register.controls['Gym_Location_latitude'].value;
      this.mydate = this.datePipe.transform(this.myDate, 'dd-mm-yyyy hh:mm:ss');

     gymowner.Company_Registration_Date=this.mydate;
      gymowner.Service_Tax_Number=this.Gym_register.controls['service_tax'].value;
      gymowner.GST_Number=this.Gym_register.controls['Gst_no'].value;

      this.httpservice.Addgymowner(gymowner).subscribe((data)=>{
 });

} 
}

