import { element } from 'protractor';

import { AdminServiceService } from './../../Services/admin-service.service';
import { RouterModule, Router } from '@angular/router';
import { EventEmmiterService } from './../../event-emmiter.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UserData } from '../notifications/notifications.component';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-maindashboardpage',
  templateUrl: './maindashboardpage.component.html',
  styleUrls: ['./maindashboardpage.component.scss']
})
export class MaindashboardpageComponent implements OnInit {
 
  dataSource: MatTableDataSource<UserData>;
  dataSource1: MatTableDataSource<UserData>;
 
  displayedColumns: string[] = ['SRNO','Gym_Id','Gym_Name','Gym_OwnerName', 'Gym_Address','PhoneNumber','Gym_Email_Id','action'];
  displayedColumnsforUser: string[] = ['SRNO','User_Id','User_Name','User_email', 'User_contact','action'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private Adminservise:AdminServiceService, private EventEmmiterService:EventEmmiterService ,private router: Router ) { }

  imgpro:any=[{url:'../assets/GYM_LOGO.PNG'},{url:'../assets/GYM_LOGO.PNG'},{url:'../assets/GYM_LOGO.PNG'}];

  events: string[] = [];
  opened: boolean=false;
  showrightArrow:boolean=true;
  showleftArrow:boolean=false;
  GymUser:any=[];
  gymOwners:any=[];

  crdate:any;

  usercount:number;
  ownercount:number;

  jan:number=0;
  feb:number=0;
  mar:number=0;
  apr:number=0;
  may:number=0;
  jun:number=0;
  jul:number=0;
  aug:number=0;
  sep:number=0;
  oct:number=0;
  nov:number=0;
  des:number=0;


  janUsers:any=[];
  febUsers:any=[];
  marUsers:any=[];
  aprUsers:any=[];
  mayUsers:any=[];
  junUsers:any=[];
  julUsers:any=[];
  augUsers:any=[];
  sepUsers:any=[];
  octUsers:any=[];
  novUsers:any=[];
  desUsers:any=[];

  jan1:number=0;
  feb1:number=0;
  mar1:number=0;
  apr1:number=0;
  may1:number=0;
  jun1:number=0;
  jul1:number=0;
  aug1:number=0;
  sep1:number=0;
  oct1:number=0;
  nov1:number=0;
  des1:number=0;


  janGYMOwners:any=[];
  febGYMOwners:any=[];
  marGYMOwners:any=[];
  aprGYMOwners:any=[];
  mayGYMOwners:any=[];
  junGYMOwners:any=[];
  julGYMOwners:any=[];
  augGYMOwners:any=[];
  sepGYMOwners:any=[];
  octGYMOwners:any=[];
  novGYMOwners:any=[];
  desGYMOwners:any=[];


  GymUser1:any[];

  ngOnInit() {

     //---------------------------FIRST Chart(GRAPH) for GYM OWNERS----------------------
      this.crdate=new Date();

        this.Adminservise.getAllgymOwners("Amar").subscribe(data=>{ 
      
                var result = JSON.parse(JSON.stringify(data))

                this.gymOwners=result;

                //console.log(this.gymOwners);
                this.gymOwners.forEach(element => {
                  var date1= Date.parse(element.Gym_Registration_Date);
                  
                 // console.log(date1);
                  var date= new Date(Date.parse(element.Gym_Registration_Date));

                 // console.log(element.Gym_Id+""+date);
                  console.log(element.Gym_Id+"==>"+element.Gym_Registration_Date+ "===>"+date1+"==>"+date+"==>"+ date.getFullYear()+"==>"+date.getMonth());

                  if( date.getFullYear()==this.crdate.getFullYear())
                  {
                    if(date.getMonth()==0)
                    {
                      this.jan1++;
                      this.janGYMOwners.push(element);
                    }
                    if(date.getMonth()==1)
                    {
                      
                      this.feb1++;
                      this.febGYMOwners.push(element);
                    //  console.log(this.feb);
                    }
                    if(date.getMonth()==2)
                    {
                      this.mar1++;
                      this.marGYMOwners.push(element);
                    }
                    if(date.getMonth()==3)
                    {
                      this.apr1++;
                      this.aprGYMOwners.push(element);
                    }
                    if(date.getMonth()==4)
                    {
                        this.may1++;
                        this.mayGYMOwners.push(element);
                    }
                    if(date.getMonth()==5)
                    {
                        this.jun1++;
                        this.julGYMOwners.push(element);
                    }
                    if(date.getMonth()==6)
                    {
                        this.jul1++;
                        this.julGYMOwners.push(element);
                    }
                    if(date.getMonth()==7)
                    {
                        this.aug1++;
                        this.augGYMOwners.push(element);
                    }
                    if(date.getMonth()==8)
                    {
                        this.sep1++;
                        this.sepGYMOwners.push(element);
                    }
                    if(date.getMonth()==9)
                    {
                    
                          this.oct1++;
                          this.octGYMOwners.push(element);
                         // console.log(this.oct);
                    }
                    if(date.getMonth()==10)
                    {
                      this.nov1++;
                      this.novGYMOwners.push(element);
                    }
                    if(date.getMonth()==11)
                    {
                        this.des1++;
                        this.desGYMOwners.push(element);
                    }
                  
                  }


                });

                this.ownercount=this.gymOwners.length;

                let dataPoints = [
                  { y: this.jan1  ,label: "Jan"},
                  { y: this.feb1 ,label: "Feb"},
                  { y: this.mar1 ,label: "Mar"},
                  { y: this.apr1 ,label: "Apr"},
                  { y: this.may1 ,label: "May"},
                  { y: this.jun1 ,label: "June"},
                  { y: this.jul1 ,label: "Jul"},
                  { y: this.aug1 ,label: "Aug"},
                  { y: this.sep1 ,label: "Sep"},
                  { y: this.oct1 ,label: "Oct"},
                  { y: this.nov1 ,label: "Nov"},
                  { y: this.des1 ,label: "Des"},
                ];
                
                let chart = new CanvasJS.Chart("GYM_OWNER_Chart",{
                  animationEnabled: true,
                  exportEnabled: true,
                  title:{
                    text: "Month-Wise All GYM-OWNER(Count) "
                  },
                  data: [{
                    type: "column",
                  
                    dataPoints : dataPoints
                  }],
                  
                }
                );
                chart.render();
        });

//---------------------------Second Chart(GRAPH) for USERS----------------------

      this.Adminservise.getAllgymUsers("Amar").subscribe(data=>{ 

        // console.log(data)
            var result = JSON.parse(JSON.stringify(data))

               this.GymUser=result;

                  this.GymUser.forEach(element => {
                  
                    var date= new Date(Date.parse(element.Ragistration_date));
  
                    //console.log(date+"==>"+ date.getFullYear()+"==>"+date.getMonth());
  
                    if( date.getFullYear()==this.crdate.getFullYear())
                    {
                      if(date.getMonth()==0)
                      {
                        this.jan++;
                        this.janUsers.push(element);
                      }
                      if(date.getMonth()==1)
                      {
                        
                        this.feb++;
                        this.febUsers.push(element);
                      }
                      if(date.getMonth()==2)
                      {
                        this.mar++;
                        this.marUsers.push(element);
                      }
                      if(date.getMonth()==3)
                      {
                        this.apr++;
                        this.aprUsers.push(element);
                      }
                      if(date.getMonth()==4)
                      {
                          this.may++;
                          this.mayUsers.push(element);
                      }
                      if(date.getMonth()==5)
                      {
                          this.jun++;
                          this.junUsers.push(element);
                      }
                      if(date.getMonth()==6)
                      {
                          this.jul++;
                          this.julUsers.push(element);
                      }
                      if(date.getMonth()==7)
                      {
                          this.aug++;
                          this.augUsers.push(element);

                      }
                      if(date.getMonth()==8)
                      {
                          this.sep++;
                          this.sepUsers.push(element);

                      }
                      if(date.getMonth()==9)
                      {
                      
                            this.oct++;
                          this.octUsers.push(element);
                            
                      }
                      if(date.getMonth()==10)
                      {
                        this.nov++;
                        this.novUsers.push(element);

                      }
                      if(date.getMonth()==11)
                      {
                            this.des++;
                            this.desUsers.push(element);

                      }
                    
                    }
                  });

                  let dataPoints = [
                    { y: this.jan  ,label: "Jan"},
                    { y: this.feb ,label: "Feb"},
                    { y: this.mar ,label: "Mar"},
                    { y: this.apr ,label: "Apr"},
                    { y: this.may ,label: "May"},
                    { y: this.jun ,label: "June"},
                    { y: this.jul ,label: "Jul"},
                    { y: this.aug ,label: "Aug"},
                    { y: this.sep ,label: "Sep"},
                    { y: this.oct ,label: "Oct"},
                    { y: this.nov ,label: "Nov"},
                    { y: this.des ,label: "Des"},
                  ];
    
                  let chart = new CanvasJS.Chart("USER_CHART",{
                    animationEnabled: true,
                    exportEnabled: true,
                    title:{
                      text: "Month-Wise All USER(Count)  "
                    },
                    data: [{
                      type: "column",
                    
                      dataPoints : dataPoints
                    }],
                    
                  }
                  );
                  chart.render();

            });


//---------------------------Second Chart(GRAPH) for USERS  END----------------------

              
     interval(1000).subscribe(x => 
      {
        this.Adminservise.getAllgymUsers("Amar").subscribe(data=>{ 

        // console.log(data)
            var result = JSON.parse(JSON.stringify(data))

            this.GymUser=result;

            this.usercount=this.GymUser.length;
            //console.log(  this.GymUser.length)
          });
    

          this.Adminservise.getAllgymOwners("Amar").subscribe(data=>{ 
      
                  var result = JSON.parse(JSON.stringify(data))

                  this.gymOwners=result;

                  this.ownercount=this.gymOwners.length;
                // console.log(  this.GymUser.length)
                    });

           });

  }


  fun_show_MonthWise_GymOwner(optionselected:string)
  {
     
    //alert("option"+optionselected);
   
       if(optionselected=="JAN")
         {
      
          this.dataSource = new MatTableDataSource(this.janGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      
         }
         if(optionselected=="FEB")
         {
      
          this.dataSource = new MatTableDataSource(this.febGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      
         }
         if(optionselected=="MAR")
         {
      
          this.dataSource = new MatTableDataSource(this.marGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      
         }
         if(optionselected=="APR")
         {
      
          this.dataSource = new MatTableDataSource(this.aprGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }
         if(optionselected=="MAY")
         {
      
          this.dataSource = new MatTableDataSource(this.mayGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }
         if(optionselected=="JUN")
         {
      
          this.dataSource = new MatTableDataSource(this.junGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }
         if(optionselected=="JUL")
         {
      
          this.dataSource = new MatTableDataSource(this.julGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }
         if(optionselected=="AUG")
         {
      
          this.dataSource = new MatTableDataSource(this.augGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }
         if(optionselected=="SEP")
         {
      
          this.dataSource = new MatTableDataSource(this.sepGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }
         if(optionselected=="OCT")
         {
           console.log(this.octGYMOwners);
          this.dataSource = new MatTableDataSource(this.octGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }

         if(optionselected=="NOV")
         {
      
          this.dataSource = new MatTableDataSource(this.novGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }

         if(optionselected=="DES")
         {
      
          this.dataSource = new MatTableDataSource(this.desGYMOwners);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         }

        
        
  }


  fun_show_MonthWise_Users(optionselected:string)
  {
     
    //alert("option"+optionselected);
   
       if(optionselected=="JAN")
         {
        
          this.dataSource1 = new MatTableDataSource(this.janUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
      
         }
         if(optionselected=="FEB")
         {
      
          this.dataSource1 = new MatTableDataSource(this.febUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
      
         }
         if(optionselected=="MAR")
         {
      
          this.dataSource1 = new MatTableDataSource(this.marUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
      
         }
         if(optionselected=="APR")
         {
      
          this.dataSource1 = new MatTableDataSource(this.aprUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }
         if(optionselected=="MAY")
         {
      
          this.dataSource1 = new MatTableDataSource(this.mayUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }
         if(optionselected=="JUN")
         {
      
          this.dataSource1 = new MatTableDataSource(this.junUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }
         if(optionselected=="JUL")
         {
      
          this.dataSource1 = new MatTableDataSource(this.julUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }
         if(optionselected=="AUG")
         {
      
          this.dataSource1 = new MatTableDataSource(this.augUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }
         if(optionselected=="SEP")
         {
      
          this.dataSource1 = new MatTableDataSource(this.sepUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }
         if(optionselected=="OCT")
         {
           console.log(this.octUsers);
          this.dataSource1 = new MatTableDataSource(this.octUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }

         if(optionselected=="NOV")
         {
      
          this.dataSource1 = new MatTableDataSource(this.novUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }

         if(optionselected=="DES")
         {
      
          this.dataSource1 = new MatTableDataSource(this.desUsers);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
         }               
  }

  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }


  funShowallList(){

    this.EventEmmiterService.onFirstCardClick();
  }

  funShowGymOwnerList()
  {
     
   this.router.navigate(['admindashboard/allgymowners']);
   // this.EventEmmiterService.onSecondCardClick();

  }

  funShowGymGoerList()
  {
    this.router.navigate(['admindashboard/allgymgoers']);
   //this.EventEmmiterService.onThirdCardClick();
  }


}

