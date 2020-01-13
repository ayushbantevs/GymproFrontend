
import { ProfileComponent } from './profile/profile.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GymadminComponent } from './gymadmin.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path:'profile',
    component:ProfileComponent,

  },
  {
    path:'',
    component:ProfileComponent,

  }
  
]
   

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class GymadminRoutingModule { }