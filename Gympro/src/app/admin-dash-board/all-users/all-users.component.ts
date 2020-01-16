import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


export interface UserData {
User_Id:string;
User_Name:string;
User_Image:string;
User_Mail_Id:string;
Password:string;
Gender:string;
Contact_Number:string;
DateOfBIrth:string;
Address:string;
Ragistration_date:string;
User_Location_Logitude:string;
User_Location_Latitude:string;
}

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {


  displayedColumns: string[] = ['SRNO','User_Id','User_Name','User_email', 'User_contact','action'];
  GymUser:any=[];

  dataSource: MatTableDataSource<UserData>;

  
  constructor() {

   this.GymUser=[
      {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
      {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
      {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
      {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
      {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
      {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
      ];


      this.dataSource = new MatTableDataSource(this.GymUser);
   }

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
 
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
 
   funViewUserDetails(id:string,gymname:string)
   {
      alert(id+""+gymname);
 
   }
 

}
