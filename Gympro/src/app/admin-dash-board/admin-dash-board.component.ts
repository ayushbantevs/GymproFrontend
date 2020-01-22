import { AdminServiceService } from './../Services/admin-service.service';
import { User } from './../landing-page/user';
import { WebStorageService } from 'angular-webstorage-service/src/web-storage.service';

import { Router, ActivatedRoute } from '@angular/router';
import { AppAdminLoginComponent } from './app-admin-login/app-admin-login.component';
import { AdminInformationComponent } from './admin-information/admin-information.component';
import { LogoutComponent } from './logout/logout.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import { EventEmmiterService } from './../event-emmiter.service';

import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { ContactUsMesgComponent } from './contact-us-mesg/contact-us-mesg.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Key } from 'protractor';
import { Admin } from './admin';
import { StorageServiceModule } from 'angular-webstorage-service/src/storage-service.module';
//import { eventNames } from 'cluster';


export interface AdminData {
  Name: string;
  Admin_type: string;
  Email: string;
  Admin_Id: string;
}

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent implements OnInit {

  constructor( private EventEmmiterService:EventEmmiterService,private dialog:MatDialog, private route:Router, private router: ActivatedRoute,private Adminservise:AdminServiceService) {    } 
  AdminName:string="Admin Name"

  Name:string;
  Admin_type:string;
  Email:string;
  Admin_Id:string;

  imgpro:any=[{url:'../assets/GYM_LOGO.PNG'},{url:'../assets/GYM_LOGO.PNG'},{url:'../assets/GYM_LOGO.PNG'}];

  events: string[] = [];
  opened: boolean=false;
  showrightArrow:boolean=true;
  showleftArrow:boolean=false;
  showAddverise:boolean=false;
  showdashboard:boolean=false;
  showAddadmin:boolean=false;
  showAllgymOwners:boolean=false;
  showGymUsers:boolean=false;
  showGymOwnerAndUsers:boolean=false;
  showfeedback:boolean=false;

  //GymUser:any=[];
   AllUsers:number=899;

 // sub:any;
   

  ngOnInit() {


   

    this.AdminName = localStorage.getItem('token');  
  
  //  this.sub = this.router.queryParams
  //  .subscribe(params => {
  //    // Defaults to 0 if no query param provided.
  //    this.AdminName = params['Name'];
  //    });

    // if(this.AdminName=="Admin Name" || this.AdminName==undefined  )
    //   {

    //     this.route.navigate(['']);
    //     const dialogRef = this.dialog.open(AppAdminLoginComponent, {
    //       width: 'auto',
    //       height:'auto',  
    //       data: {message: "", email: "",name:""}
    //     });

    
    //   }
      
  }

  logout()
  {

 
     // console.log('logout');  
     // this.Adminservise.logout();  
     
    
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: 'auto',
      height:'auto',  
      data: {}
   });
  }

  funadminInfo()
  {
   
    this.Adminservise.getAdminInformation( this.AdminName).subscribe((data)=>{

      var result = JSON.parse(JSON.stringify(data))
      console.log(result);
      const dialogRef = this.dialog.open(AdminInformationComponent, {
        width: 'auto',
        height:'auto',  
        data: {Name:result[0].Admin_Name,Admin_type:result[0].Admin_Type,Admin_id:result[0].Admin_Id,email:result[0].Admin_Email }
     });

    });
    //this.Name="Amar",this.Admin_Id="ADM1223",this.Admin_type="Support";
   

  }
  
}