import { GymcustomerserviceService } from './../Services/gymcustomerservice.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy ,ViewChild} from '@angular/core';

import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-gymadmin',
  templateUrl: './gymadmin.component.html',
  styleUrls: ['./gymadmin.component.scss']
})
export class GymadminComponent implements OnDestroy {

 @ViewChild('Matsidenav',{static: false}) sidenav: MatSidenav;
  opened: boolean = true;


    tooBarItems:any=[{name:'sideBarButton',icon:'list' }];
    navItems:any=[{name:'Profile',icon:'face',route:"profile" },{name:'Gym Coustomers',icon:'list',route:"gymcoustomers" },{name:'Offers',icon:'list',route:"gymoffers" }];

    shouldShow=false;
    constructor() {
      
    }
  
    ngOnDestroy(): void {
     
    }
    ngOnInit() {

      
    }

   

}
