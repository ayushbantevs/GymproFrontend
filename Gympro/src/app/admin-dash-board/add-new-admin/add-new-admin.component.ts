import { AdminServiceService } from './../../Services/admin-service.service';
import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.scss']
})
export class AddNewAdminComponent implements OnInit {

  Male:string="Male";
  Female:string="Female";
  Application_Support:string="Application Support";
  Manager:string="Manager";

  name = new FormControl('', [ Validators.required,  ]);

  email = new FormControl('', [ Validators.required,  ]);

  contact_no = new FormControl('', [ Validators.required,  ]);

  password = new FormControl('', [ Validators.required,  ]);

  conferm_password = new FormControl('', [ Validators.required,  ]);

  Main_Admin_Id = new FormControl('', [ Validators.required,  ]);
 
  Main_Admin_password = new FormControl('', [ Validators.required,  ]);

  AdminGender=new FormControl('', [ Validators.required,  ]);

  AdminType=new FormControl('', [ Validators.required,  ]);

 check:any;
  
 newdate:any;
 // matcher = new MyErrorStateMatcher();
 currentDate:string;

  constructor(private httpservice:AdminServiceService,private datePipe:DatePipe) { }

  ngOnInit() {
  }
   
  
  AddAdmin()
  {
    this.newdate=new Date();
    this.currentDate = this.datePipe.transform(this.newdate, 'yyyy-MM-dd');

    var a =new Admin();
    a.Admin_Name=this.name.value;
    a.Admin_Email=this.email.value;
    a.Mobile_Number=this.contact_no.value;
    a.Admin_Gender=this.AdminGender.value;
    a.Mobile_Number=this.contact_no.value;
    a.Admin_Password=this.password.value;
    a.Admin_Id=this.Main_Admin_Id.value;
    a.Admin_Type=this.AdminType.value;
    a.confermpwd=this.conferm_password.value;
    a.Admin_Create_date= this.currentDate;
    
  
   if(a.Admin_Name=="" || a.Admin_Email=="" ||a.Mobile_Number=="" || a.Admin_Gender=="" || a.Mobile_Number=="" || a.Admin_Password=="" || a.Admin_Id=="" || a.Admin_Type=="" || a.confermpwd=="")
     {
      this.name.markAllAsTouched();
      this.email.markAllAsTouched();
      this.contact_no.markAllAsTouched();
      this.password.markAllAsTouched();
      this.conferm_password.markAllAsTouched();
      this.Main_Admin_password.markAllAsTouched();
      this.AdminGender.markAllAsTouched();
      this.Main_Admin_Id.markAllAsTouched();
      this.AdminType.markAllAsTouched();
     }

     else
     {
      this.httpservice.AddAdmin(a).subscribe((data)=>{   
      });
     }
    
  }

}
