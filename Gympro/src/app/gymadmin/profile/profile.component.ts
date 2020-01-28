import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { SankbartemmplateComponent } from './../sankbartemmplate/sankbartemmplate.component';

import { GymprofileService } from './../../Services/gymprofile.service';
import { GymcustomerserviceService } from './../../Services/gymcustomerservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Profile } from './Profile';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MAT_BOTTOM_SHEET_DATA, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  percentDone:any;
  uploadSuccess:any;
  durationInSeconds=5;
  Gym_id:string="G101";
  Gym_Name: string;
  Gym_owner:string;
  Gym_Website_Url:string;
  Gym_Email_Id:string;
  CertificateNumber:string;
  oneRecord:any;
  data: any;
 flag:boolean=false;
 name:string="Enable Edit";
  
  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},
  {url:'../assets/Images/pexels-photo-1954524.jpeg'},
  {url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];
 
  constructor(private profileService:GymprofileService,private fb: FormBuilder,private _snackBar: MatSnackBar) { }

  form = this.fb.group({
    Gym_Name: [null],
    Gym_Owner_Name: [null],
    Gym_Website: [null],
    Gym_MailId: [null],
    Gym_Address: [null],
    Gym_Number:[null]
  });

  DisabledForm=this.fb.group({

    Gym_Registration_Date:[null],
    Gym_Certification_Number:[null],
    Company_Registration_Date:[null],
    Service_Tax_Number:[null],
    GST_Number:[null]

  })
  ngOnInit() {

   //const tempData = JSON.parse(JSON.stringify(this.data));
 
  this.getdatabyid(this.Gym_id);  //  console.log(this.data);
  this.form.disable();
 // this.DisabledForm.disable();
  
  }
    
 Edit()
 {
   if(!this.flag)
   {  this.form.enable();
    this.name="Disable Edit";
    this.flag=!this.flag;
   }else
   {
     this.form.disable();
     this.name="Enable Edit";
     this.flag=!this.flag;
   }
 }
 

  getdatabyid(Gym_id:string){

    this.profileService.getData(Gym_id).subscribe((data:Profile)=>{

  
   //   console.log(data);
      this.form.controls.Gym_Name.setValue(data[0].gym_Name);
      this.form.controls.Gym_Owner_Name.setValue(data[0].gym_Owner_Name);
      this.form.controls.Gym_Website.setValue(data[0].gym_Website);
      this.form.controls.Gym_MailId.setValue(data[0].gym_MailId);
      this.form.controls.Gym_Address.setValue(data[0].gym_Address);
      this.form.controls.Gym_Number.setValue(data[0].gym_Number);
      this.DisabledForm.controls.Gym_Registration_Date.setValue(this.dateReturn(data[0].registration_Date));
      this.DisabledForm.controls.Gym_Certification_Number.setValue(data[0].gym_Certification_Number);
      this.DisabledForm.controls.Company_Registration_Date.setValue(this.dateReturn(data[0].company_Registration_Date));
      this.DisabledForm.controls.Service_Tax_Number.setValue(data[0].service_Tax_Number);
      this.DisabledForm.controls.GST_Number.setValue(data[0].gsT_Number);
      
    },
    (error:any)=>{console.log(error);}
    );

   

    }





    dateReturn(dateObj:string="")
  {
     console.log(dateObj);
    var obj=dateObj.substring(0,10).split('-');
       var convertedDate=new Date(obj[2]+'-'+obj[1]+'-'+obj[0]);
      return convertedDate.getUTCDate()+"-"+(convertedDate.getUTCMonth()+1)+"-"+convertedDate.getUTCFullYear();
    
  }

  Save(profile:Profile){
  profile.Gym_Id=this.Gym_id;
 var sucess;
 this.profileService.updateProfile(profile).subscribe(data=>{
   if(data=='1')
   {
     sucess=data ? 'Success' : 'Failed'
       
     this._snackBar.openFromComponent(SankbartemmplateComponent, {
      duration: this.durationInSeconds * 1000,
      data:{Message:sucess}
    });

   }
 });




}


        
}
