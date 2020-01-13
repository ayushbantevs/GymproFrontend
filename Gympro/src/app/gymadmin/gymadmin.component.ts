import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-gymadmin',
  templateUrl: './gymadmin.component.html',
  styleUrls: ['./gymadmin.component.scss']
})
export class GymadminComponent implements OnDestroy {

<<<<<<< Updated upstream
  mobileQuery: MediaQueryList;

  
  array=['profile']
   
    private _mobileQueryListener: () => void;
  
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
=======
  // @ViewChild(MatSidenav) sidenav: MatSidenav;
  opened: boolean = true;
    tooBarItems:any=[{name:'sideBarButton',icon:'list' }];
    navItems:any=[{name:'Profile',icon:'face' },{name:'Gym Coustomers',icon:'list' },{name:'Offers',icon:'list' }];
    shouldShow=false;
    constructor() {
>>>>>>> Stashed changes
      
    }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
