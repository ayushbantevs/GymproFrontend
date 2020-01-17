import { LocationComponent } from './gymuser/navigation/location/location.component';
import { NotificationComponent } from './gymuser/navigation/notification/notification.component';
import { ClasslistComponent } from './gymuser/navigation/classlist/classlist.component';
import { SessionlistComponent } from './gymuser/navigation/sessionlist/sessionlist.component';

import { GymoffersComponent } from './gymadmin/gymoffers/gymoffers.component';
import { ProfileModule } from './gymadmin/profile/profile.module';
import { ProfileComponent } from './gymadmin/profile/profile.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { GymadminComponent } from './gymadmin/gymadmin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Edit_profileComponent } from './gymuser/navigation/edit_profile/edit_profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { GymcoustomersComponent } from './gymadmin/gymcoustomers/gymcoustomers.component';

import { NavigationComponent } from './gymuser/navigation/navigation.component';
import { GymlistComponent } from './gymuser/navigation/gymlist/gymlist/gymlist.component';
import { MaplistComponent } from './gymuser/navigation/maplist/maplist.component';
import { GymsonmapComponent } from './gymuser/navigation/gymlist/gymlist/gymsonmap/gymsonmap.component';


// const routes: Routes = [
//   
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
},
  
  {path:'gymadmin', component:GymadminComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'', component:LandingPageComponent},
  
  

   {
       path: 'userhome',
          component: NavigationComponent,
           children: [  
            { path: '', component: MaplistComponent},
            { path: 'sessionlist', component: SessionlistComponent},
            { path: 'classlist', component: ClasslistComponent},
            { path: 'editprofile', component: Edit_profileComponent},
            { path: 'notification', component: NotificationComponent},
            
            { path: 'gymonmap',
             component: GymsonmapComponent,
             children:[
              { path: 'location', component: LocationComponent},
              { path: 'gymlist', component: GymlistComponent},

            ]
            },
           
          ]
     },

{
  path:'',
  redirectTo:'userhome',
  pathMatch:'full'
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
