import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UserData } from '../notifications/notifications.component';



export interface GymOwner {
  Name: string;
  Message: string;
  Contact: string;
  email: string;
  date:string;
  action:string;
}

export interface GymUser {
  Name: string;
  Message: string;
  Contact: string;
  email: string;
  date:string;
  action:string;
}

export interface Visiter {
  Name: string;
  Message: string;
  Contact: string;
  email: string;
  date:string;
  action:string;
}








@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  
  GymUser:any[];
  GymOwner:any[];
  Visiter:any[];

  feedback:any=[];
  image:any=[{img:"../assets/GYM_LOGO.PNG"}];

  dataSource: MatTableDataSource<UserData>;
 
  displayedColumns: string[] = ['Name', 'Message', 'Contact', 'email','date','action'];
 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor() { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  funshowFeedback(optionselected:string)
  {

         if(optionselected=="Gym_Owner")
         {
          this.GymUser=[{Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"hii demo message",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          ]; 
      
          this.dataSource = new MatTableDataSource(this.GymUser);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      
         }


         if(optionselected=="Gym_Goers")
         {
          this.GymUser=[{Name:"Ayush",Message:"",Contact:"9552065205",email:"Ayush@gamil.com",date:"01/01/2020"},
          {Name:"Ayush",Message:"",Contact:"9552065205",email:"Ayush@gamil.com",date:"01/01/2020"},
          {Name:"Ayush",Message:"hii demo message",Contact:"9552065205",email:"Ayush@gamil.com",date:"01/01/2020"},
          ]; 
      
          this.dataSource = new MatTableDataSource(this.GymUser);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      
         }


         if(optionselected=="Site_Visiters")
         {
          this.GymUser=[{Name:"Pratik",Message:"",Contact:"9552065205",email:"Pratik@gamil.com",date:"01/01/2020"},
          {Name:"Pratik",Message:"",Contact:"9552065205",email:"Pratik@gamil.com",date:"01/01/2020"},
          {Name:"Pratik",Message:"hii demo message",Contact:"9552065205",email:"Pratik@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Vinayak",Message:"",Contact:"9552065205",email:"Vinayak@gamil.com",date:"01/01/2020"},
          {Name:"Vinayak",Message:"",Contact:"9552065205",email:"Vinayak@gamil.com",date:"01/01/2020"},
          {Name:"Vinayak",Message:"",Contact:"9552065205",email:"Vinayak@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          {Name:"Amar",Message:"",Contact:"9552065205",email:"amar@gamil.com",date:"01/01/2020"},
          ]; 
      
          this.dataSource = new MatTableDataSource(this.GymUser);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      
         }

  }

}
