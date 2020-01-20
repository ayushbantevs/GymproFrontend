import { offers } from './offers';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gymoffers',
  templateUrl: './gymoffers.component.html',
  styleUrls: ['./gymoffers.component.scss']
})
export class GymoffersComponent implements OnInit {

  Offers:offers[]=[];
  startDate: any;
  endDate: any;
   ofprice= new FormControl('0');
   expandedValue:boolean=false;
  constructor() { }

  ngOnInit() {
  }


  Addoffer()
  {
    var offer= new offers();

     offer.GymId="G101";
     offer.OfferId="OF101";
     offer.OfferPrice=this.ofprice.value;
     offer.startDate=this.startDate as Date;
     offer.endDate=this.endDate as Date;
     this.Offers.push(offer);
      console.log(this.Offers);
  }

  dateChangeFunc( type:string,event: MatDatepickerInputEvent<Date>)
  {
    
      if(type=="End")
      {
        this.endDate=event.value;
      }
      if(type=="Start")
      {
        this.startDate=event.value;
      }
  }

  onExpanded()
  {
    this.expandedValue=!this.expandedValue;

  }
  onCollapsed()
  {
    this.expandedValue=!this.expandedValue;

  }

}
