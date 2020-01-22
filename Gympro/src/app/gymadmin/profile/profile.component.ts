import { GymprofileService } from './../../Services/gymprofile.service';
import { GymcustomerserviceService } from './../../Services/gymcustomerservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Profile } from './Profile';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  percentDone:any;
  uploadSuccess:any;

  Gym_id:string="G102";
  Gym_Name: string;
  Gym_owner:string;
  Gym_Website_Url:string;
  Gym_Email_Id:string;
  CertificateNumber:string;
  oneRecord:any;
  data: any;
 
  
  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},
  {url:'../assets/Images/pexels-photo-1954524.jpeg'},
  {url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];
 
  constructor(private profileService:GymprofileService,private fb: FormBuilder) { }

  form = this.fb.group({
    Gym_Name: [null],
    Gym_Owner_Name: [null],
    Gym_Website: [null],
    Gym_MailId: [null],
    Gym_Certification_Number: [null],
  });
  ngOnInit() {

   //const tempData = JSON.parse(JSON.stringify(this.data));
    this.getdatabyid(this.Gym_id);
  this.form.disable();

  
  }
    
 Edit(Gym_Name:string)
 {
  this.form.controls.Gym_Name.enable();
  
 }
 Edit1(Gym_Owner_Name:string)
 {
  this.form.controls.Gym_Owner_Name.enable();
  
 }
 Edit2(Gym_Website:string)
 {
  this.form.controls.Gym_Website.enable();
  
 }
 Edit3(Gym_MailId:string)
 {
  this.form.controls.Gym_MailId.enable();
  
 }
 Edit4(Gym_Certification_Number:string)
 {
  this.form.controls.Gym_Certification_Number.enable();
  
 }


  getdatabyid(Gym_id:string)
    {
    this.profileService.getData(Gym_id).subscribe((data:Profile)=>{
      console.log(data);
      this.form.controls.Gym_Name.setValue(data[0].gym_Name);
      this.form.controls.Gym_Owner_Name.setValue(data[0].gym_Owner_Name);
      this.form.controls.Gym_Website.setValue(data[0].gym_Website);
      this.form.controls.Gym_MailId.setValue(data[0].gym_MailId);
      this.form.controls.Gym_Certification_Number.setValue(data[0].gym_Certification_Number);
    },
    (error:any)=>{console.log(error);}
    );

    }

  Save(profile:Profile){

    profile.Gym_Id=this.Gym_id;

    console.log(profile);
   
//  this.profileService.update(profile).subscribe(
 
//  );
               }


               
upload( File:File)
{
  this.profileService.uploadAndProgressSingle(File).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      this.percentDone = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      this.uploadSuccess = true;
    }
});
}

        
}
