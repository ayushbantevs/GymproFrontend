import { GymoffersComponent } from './gymadmin/gymoffers/gymoffers.component';
import { ProfileModule } from './gymadmin/profile/profile.module';
import { ProfileComponent } from './gymadmin/profile/profile.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymadminComponent } from './gymadmin/gymadmin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {path:'gymadmin', component:GymadminComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'', component:LandingPageComponent}

import { GymcoustomersComponent } from './gymadmin/gymcoustomers/gymcoustomers.component';


const routes: Routes = [
  {
    path:'gymadmin', 
   component:GymadminComponent,
  children:[
    {path:'',pathMatch:'full',redirectTo:'profile'},
    {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'gymoffers',
    component:GymoffersComponent
  },
  {
    path:'gymcoustomers',
    component:GymcoustomersComponent
  },

]

},
{
  path:'',
  redirectTo:'landingpage',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
