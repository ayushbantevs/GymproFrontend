import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';


export interface UserData {
  Name: string;
  Usertype: string;
  SubId: string;
  enddate: string;
  startdate:string;
  Action:string;
  contact:string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

   

   DataSource1:any[];


  displayedColumns: string[] = ['Name', 'Usertype', 'SubId', 'enddate','startdate','Contact_no','Action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor( public dialog:MatDialog) { 
    

    this.DataSource1 =[{Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    {Name:"Amar",Usertype:"GymOwner",SubId:"1232",enddate:"12/12/2020",startdate:"01/01/2020",contact:"9552065205"},
    ]; 

    this.dataSource = new MatTableDataSource(this.DataSource1);

    // Assign the data to the data source for the table to render
   

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  funView_notification_Details(name:string,utype:string,sid:string,sdate:string,edate:string,contact:string):void{
   
    const dialogRef = this.dialog.open(NotificationDetailsComponent, {
      width: 'auto',
      height:'auto',  
      data: {Name: name, Usertype: utype,SubId:sid,startdate:sdate,enddate:edate,contact:contact}
   });

   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
    // this.animal = result;
   });
   }


  }
 



// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
