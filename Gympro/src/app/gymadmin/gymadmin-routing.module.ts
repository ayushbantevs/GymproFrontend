import { GymcoustomersComponent } from './gymcoustomers/gymcoustomers.component';
import { GymoffersComponent } from './gymoffers/gymoffers.component';

import { ProfileComponent } from './profile/profile.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,

  },

  {
    path:'profile',
    component:ProfileComponent,

  },
  {
    path:'gymoffers',
    component:GymoffersComponent,
  },
  {
    path:'gymcoustomers',
    component:GymcoustomersComponent,

  }
  
]
   

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class GymadminRoutingModule { }