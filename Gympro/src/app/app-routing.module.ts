
import { GymPageComponent } from './landing-page/gym-page/gym-page.component';
import { LoginPageComponent } from './landing-page/login-page/login-page.component';
import { UserPageComponent } from './landing-page/user-page/user-page.component';

//import { UserRegisterComponent } from './user-register/user-register.component';

//import { RegisterComponent } from './register/register.component';

import { GymoffersComponent } from './gymadmin/gymoffers/gymoffers.component';
import { ProfileModule } from './gymadmin/profile/profile.module';
import { ProfileComponent } from './gymadmin/profile/profile.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymadminComponent } from './gymadmin/gymadmin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Edit_profileComponent } from './gymuser/navigation/edit_profile/edit_profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
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
 component:LandingPageComponent
}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
