import { AdminInformationComponent } from './admin-information/admin-information.component';
import { LogoutComponent } from './logout/logout.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import { EventEmmiterService } from './../event-emmiter.service';

import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { ContactUsMesgComponent } from './contact-us-mesg/contact-us-mesg.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
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

  constructor(private EventEmmiterService:EventEmmiterService,private dialog:MatDialog) {    } 

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


   AllUsers:number=899;

  



  ngOnInit() {

   
      this.EventEmmiterService.subsVar = this.EventEmmiterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.funshowalllist();    
      });    

    

      
      this.EventEmmiterService.subsVar = this.EventEmmiterService.    
      Gym_Owners.subscribe((name:string) => {    
        this.funshowAllGymOwner();    
      });    

    

      this.EventEmmiterService.subsVar = this.EventEmmiterService.    
      Gym_Goers.subscribe((name:string) => {    
        this.funshowAllGymOwner();    
      });    

    


   
  }

  logout()
  {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: 'auto',
      height:'auto',  
      data: {}
   });
  }

  funadminInfo()
  {
    this.Name="Amar",this.Admin_Id="ADM1223",this.Admin_type="Support";
    const dialogRef = this.dialog.open(AdminInformationComponent, {
      width: 'auto',
      height:'auto',  
      data: {Name:this.Name,Admin_type:this.Admin_type,Admin_id:this.Admin_Id,email:this.Email }
   });

  }

  showarrow()
  {
      if(this.showrightArrow==true)
      {
      this.showrightArrow=false;
      this.showleftArrow=true;
      }

     else if(this.showleftArrow==true )
     {
      this.showrightArrow=true;
      this.showleftArrow=false;
     }
  }

  showdashbord()
  {
    this.showdashboard=true;
    this.showAddverise=false;
    this.showAddadmin=false;
    this.showAllgymOwners=false;
    this.showGymUsers=false;
    this.showGymOwnerAndUsers=false;
    this.showfeedback=false;
    
  
    
  }
  showAddverisefun()
  {
    this.showAddverise=true;
    this.showdashboard=false;
    this.showAddadmin=false;
    this.showAllgymOwners=false;
    this.showGymUsers=false;
    this.showGymOwnerAndUsers=false;
    this.showfeedback=false;
  }
  addadminfun()
  {
    this.showAddadmin=true;
    this.showdashboard=false;
    this.showAddverise=false;
    this.showAllgymOwners=false;
    this.showGymUsers=false;
    this.showGymOwnerAndUsers=false;
    this.showfeedback=false;
  }
  funshowAllGymOwner(){
    this.showAllgymOwners=true;
    this.showdashboard=false;
    this.showAddverise=false;
    this.showAddadmin=false;
    this.showGymUsers=false;
    this.showGymOwnerAndUsers=false;
    this.showfeedback=false;
  }
  funshowgymUsers(){
    this.showdashboard=false;
    this.showAddverise=false;
    this.showAddadmin=false;
    this.showAllgymOwners=false;
    this.showGymUsers=true;
    this.showGymOwnerAndUsers=false;
    this.showfeedback=false;

  }

  funshowalllist()
  {
    this.showGymOwnerAndUsers=true;
    this.showdashboard=false;
    this.showAddverise=false;
    this.showAddadmin=false;
    this.showAllgymOwners=false;
    this.showGymUsers=false;
    this.showfeedback=false;
   
    //alert("done...!");

  }
  funshowFeedBack(){

    this.showfeedback=true;
    this.showGymOwnerAndUsers=false;
    this.showdashboard=false;
    this.showAddverise=false;
    this.showAddadmin=false;
    this.showAllgymOwners=false;
    this.showGymUsers=false;
  }
  
}
