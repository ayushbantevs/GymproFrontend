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
import { NavigationComponent } from './gymuser/navigation/navigation.component';
import { GymListComponent } from './gymuser/gymList/gymList.component';
import { LocateComponent } from './gymuser/locate/locate.component';
import { LoginPageComponent } from './landing-page/login-page/login-page.component';



// const routes: Routes = [
//   {path:'gymadmin', component:GymadminComponent},
//   {path:'userprofile',component:UserprofileComponent},
//   {path:'', component:LandingPageComponent}







const routes: Routes = [
  {
    path: 'apphome',
    component: LandingPageComponent,
    children: [
     // {path: '', pathMatch: 'full', redirectTo: 'apphome'},
        {
          path: 'login',
          component: LoginPageComponent
        },
      // {
      //   path: 'gymoffers',
      //   component: GymoffersComponent
      // },
      // {
      //    path: 'gymcoustomers',
      //   component: GymcoustomersComponent
      // },
    ]
  },


  /////////  User Profile Navigations
  {
    path: 'userhome',
    component: NavigationComponent,
    children: [
        // {path: '', pathMatch: 'full', redirectTo: 'userhome'},
        // {
        //   path: 'userhome',
        //   component: NavigationComponent
        // },
        {
          path: 'edituserprofile',
          component: Edit_profileComponent
        },
        {
          path: 'gymlist',
          component: GymListComponent
        },
        {
          path: 'locate',
          component: LocateComponent
        },
    ]
  },

  {path: '', pathMatch: 'full', redirectTo: 'APPhome'},


  // {path: '', redirectTo: 'landingpage', pathMatch: 'full'},
  // {path: 'gymadmin', component: GymadminComponent},
  // {path: 'edituserprofile', component: Edit_profileComponent},
  // {path: 'gymadmin', component:GymadminComponent},
  // {path: 'userprofile', component: UserprofileComponent},
  // {path: 'landingpage', component: LandingPageComponent},
  // {path: 'nav', component: NavigationComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
