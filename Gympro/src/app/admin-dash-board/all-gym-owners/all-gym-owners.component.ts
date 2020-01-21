import { AdminServiceService } from './../../Services/admin-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


export interface UserData {
  Gym_Id:string;
  Gym_Name:string;
  Gym_OwnerName:string;
  Gym_Address:string;
  PhoneNumber:string;
  Gym_Email_Id:string;
}


@Component({
  selector: 'app-all-gym-owners',
  templateUrl: './all-gym-owners.component.html',
  styleUrls: ['./all-gym-owners.component.scss']
})
export class AllGymOwnersComponent implements OnInit {

  displayedColumns: string[] = ['SRNO','Gym_Id','Gym_Name','Gym_OwnerName', 'Gym_Address','PhoneNumber','Gym_Email_Id','action'];

  GymOwners:any=[];
  dataSource: MatTableDataSource<UserData>;


  
  constructor(private httpservice:AdminServiceService) {

    //  this.GymOwners=[{Gym_Id:"1223",Gym_Name:"Be Fit ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},
    //                  {Gym_Id:"12",Gym_Name:"Body Zone ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},
    //                  {Gym_Id:"12",Gym_Name:"Body Zone ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},
    //                  {Gym_Id:"12",Gym_Name:"Body Zone ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},
    //                  {Gym_Id:"12",Gym_Name:"Body Zone ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},
    //                  {Gym_Id:"12",Gym_Name:"Body Zone ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},
    //                  {Gym_Id:"12",Gym_Name:"Body Zone ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},
    //                  {Gym_Id:"12",Gym_Name:"Body Zone ",Gym_OwnerName:"AMAR",Gym_Address:"PUNE", PhoneNumber:"95520652**", Gym_Email_Id:"amar@gmail.com"},  
    //                 ];
  
    // this.dataSource = new MatTableDataSource(this.GymOwners);

   }

  icon:any=[]=["src\assets\GYM_LOGO.PNG"];
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.httpservice.getAllgymOwners("Amar").subscribe(data=>{ 

       var result = JSON.parse(JSON.stringify(data))
     
       console.log(result);
       this.GymOwners=result;
       this.dataSource = new MatTableDataSource(this.GymOwners);
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

  funViewGymDetails(id:string,gymname:string)
  {
     alert(id+""+gymname);

  }

}
