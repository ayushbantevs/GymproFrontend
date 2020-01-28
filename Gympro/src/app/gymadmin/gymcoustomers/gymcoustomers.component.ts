import { GymcustomerserviceService } from './../../Services/gymcustomerservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gymcoustomers',
  templateUrl: './gymcoustomers.component.html',
  styleUrls: ['./gymcoustomers.component.scss']
})
export class GymcoustomersComponent implements OnInit {

  data:any=[];
  Totallength:number=0;
  constructor(private gymcCoustomerService:GymcustomerserviceService) { }
  gymId:any="G102";
  ngOnInit() {
   
    this.gymcCoustomerService.getAllCustomers(this.gymId).subscribe((data=>{
      this.data=JSON.parse (JSON.stringify(data));
      this.Calculatelength();
      
    }));
   
   
  }


  Calculatelength()
  {
    var i=0;
    this.data.forEach(element => {
      i++;
      
    });
    this.Totallength=i;
    console.log(i);
  }
  dateReturn(dateObj:string="")
  {
     console.log(dateObj);
    var obj=dateObj.substring(0,10).split('-');
       var convertedDate=new Date(obj[2]+'-'+obj[1]+'-'+obj[0]);
      return convertedDate.getUTCDate()+"-"+(convertedDate.getUTCMonth()+1)+"-"+convertedDate.getUTCFullYear();
    
  }

  changeStatus(Gymid:string,UserId:string,status:number)
  {
    if(status==0)
    {
      status=1;
    }else
    {
      status=0;
    }
    
   // console.log(this.Hasmap[UserId]);
   this.gymcCoustomerService.changeStatus(Gymid,UserId,status).subscribe(data=>
    {
       if(data==1)
       {
        for(var i=0;i<this.Totallength;i++)
        {
          if(this.data[i].userId==UserId)
          {
            this.data[i].subs_Status=status;
    
          }
        }
       }
    });

   

    
   

  }


  // createHashMap()
  // {
  //     this.data.forEach(element => {
  //       this.Hasmap[element.userId]=element;
        
  //     });
  //     console.log("hashMap Created");

  // }

}
