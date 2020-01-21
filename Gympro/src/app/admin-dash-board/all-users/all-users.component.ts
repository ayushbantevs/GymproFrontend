import { AdminServiceService } from './../../Services/admin-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTooltipModule } from '@angular/material';


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
  GymUser:any;


  dataSource: MatTableDataSource<UserData>;

  
  constructor(private httpservice:AdminServiceService) {
   

     //  this.GymUser=[
  //     {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
  //     {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
  //     {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
  //     {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
  //     {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
  //     {User_Id:"1",User_Name:"Ayush" ,User_Mail_Id:"ayush@gmail.com",Contact_Number:"8956528****"},
  //     ];
    
   }

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
 
   ngOnInit() {
   this.httpservice.getAllgymUsers("Amar").subscribe(data=>{ 

     // console.log(data)
      var result = JSON.parse(JSON.stringify(data))
    
      console.log(result);
      this.GymUser=result;
      this.dataSource = new MatTableDataSource(this.GymUser);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     });

    
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
