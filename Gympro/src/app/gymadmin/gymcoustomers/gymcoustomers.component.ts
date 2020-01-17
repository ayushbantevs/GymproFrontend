import { GymcustomerserviceService } from './../../Services/gymcustomerservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gymcoustomers',
  templateUrl: './gymcoustomers.component.html',
  styleUrls: ['./gymcoustomers.component.scss']
})
export class GymcoustomersComponent implements OnInit {

  data:any;
  constructor(private gymcCoustomerService:GymcustomerserviceService) { }

  ngOnInit() {
    this.gymcCoustomerService.getAllCustomers("G101").subscribe((data=>{
      console.log(data);
      this.data=JSON.parse (JSON.stringify(data));
    }));

  }


   dateReturn(dateObj:string)
  {
   // console.log(dateObj.substring(1,10));
       var convertedDate=new Date(dateObj.substring(1,10));
      // console.log(convertedDate);
      return convertedDate.toDateString();
    
  }

  changeStatus(Gymid:string,UserId:string)
  {
    console.log(Gymid+"---"+UserId);
    //this.gymcCoustomerService.changeStatus(Gymid,UserId).subscribe();
  }

}
