import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymadminComponent } from './gymadmin/gymadmin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {path:'gymadmin', component:GymadminComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
