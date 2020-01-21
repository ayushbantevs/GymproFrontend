import { AdminServiceService } from './../../Services/admin-service.service';
import { RouterModule, Router } from '@angular/router';
import { EventEmmiterService } from './../../event-emmiter.service';
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-maindashboardpage',
  templateUrl: './maindashboardpage.component.html',
  styleUrls: ['./maindashboardpage.component.scss']
})
export class MaindashboardpageComponent implements OnInit {
 
 

  constructor(private Adminservise:AdminServiceService, private EventEmmiterService:EventEmmiterService ,private router: Router ) { }

  imgpro:any=[{url:'../assets/GYM_LOGO.PNG'},{url:'../assets/GYM_LOGO.PNG'},{url:'../assets/GYM_LOGO.PNG'}];

  events: string[] = [];
  opened: boolean=false;
  showrightArrow:boolean=true;
  showleftArrow:boolean=false;
  GymUser:any=[];
  gymOwners:any=[];
  usercount:number;
  ownercount:number;

  ngOnInit() {



    this.Adminservise.getAllgymUsers("Amar").subscribe(data=>{ 

      console.log(data)
         var result = JSON.parse(JSON.stringify(data))
        
         console.log(result);
         this.GymUser=result;
         this.usercount=this.GymUser.length;
        console.log(  this.GymUser.length)
        });

        this.Adminservise.getAllgymOwners("Amar").subscribe(data=>{ 

          console.log(data)
             var result = JSON.parse(JSON.stringify(data))
            
             console.log(result);
             this.gymOwners=result;
             this.ownercount=this.gymOwners.length;
           // console.log(  this.GymUser.length)
            });
    










    let dataPoints = [
			{ y: 71  ,label: "Jan"},
			{  y: 55 ,label: "Feb"},
			{ y: 50 ,label: "Mar"},
			{ y: 65 ,label: "Apr"},
			{ y: 95 ,label: "May"},
			{ y: 68 ,label: "June"},
			{ y: 28 ,label: "Jul"},
			{ y: 34 ,label: "Aug"},
      { y: 14 ,label: "Sep"},
      { y: 14 ,label: "Oct"},
      { y: 14 ,label: "Nov"},
      { y: 14 ,label: "Des"},
		];
		
		let chart = new CanvasJS.Chart("chartContainer",{
      animationEnabled: true,
      exportEnabled: true,
			title:{
				text: "Month-Wise All App User "
			},
			data: [{
        type: "column",
       
        dataPoints : dataPoints
      }],
      
    }
    );
		chart.render();


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

