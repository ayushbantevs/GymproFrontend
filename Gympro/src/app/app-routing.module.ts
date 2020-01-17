
import { LocationComponent } from './gymuser/navigation/location/location.component';
import { NotificationComponent } from './gymuser/navigation/notification/notification.component';
import { ClasslistComponent } from './gymuser/navigation/classlist/classlist.component';
import { SessionlistComponent } from './gymuser/navigation/sessionlist/sessionlist.component';


import { AdminInformationComponent } from './admin-dash-board/admin-information/admin-information.component';
import { LogoutComponent } from './admin-dash-board/logout/logout.component';
import { NotificationDetailsComponent } from './admin-dash-board/notifications/notification-details/notification-details.component';
import { ContactUsMesgComponent } from './admin-dash-board/contact-us-mesg/contact-us-mesg.component';
import { NotificationsComponent } from './admin-dash-board/notifications/notifications.component';
import { FeedbackComponent } from './admin-dash-board/feedback/feedback.component';
import { AllGymOwnersComponent } from './admin-dash-board/all-gym-owners/all-gym-owners.component';
import { MaindashboardpageComponent } from './admin-dash-board/maindashboardpage/maindashboardpage.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './admin-dash-board/all-users/all-users.component';
import { AddNewAdminComponent } from './admin-dash-board/add-new-admin/add-new-admin.component';
import { AllGymOwnerAndGymGoersListComponent } from './admin-dash-board/all-gym-owner-and-gym-goers-list/all-gym-owner-and-gym-goers-list.component';
import { AdvertisePageComponent } from './admin-dash-board/advertise-page/advertise-page.component';
import { ContactUsComponent } from './admin-dash-board/contact-us/contact-us.component';

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


const routes: Routes = [
  //landingpage route
  {
    path:'',
   component:LandingPageComponent
  },
  //gymadmin page
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
          { path: 'edituserprofile', component: Edit_profileComponent},
          { path: 'gymlist', component: GymlistComponent},


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


  
  
  
  
  
  { path: 'admindashboard', component: AdminDashBoardComponent,
  children:[
        {
          path: 'allgymgoers',
          component: AllUsersComponent,
          data: { title: 'admindashboard' },
           children:
           [
             {
                path: 'logout',
                component: LogoutComponent,
                data: { title: 'logout' },
            },
            {
              path: 'AdminInfo',
              component: AdminInformationComponent,
              data: { title: 'AdminInfo' },
            },

           ] 
        },


        {
          path: 'ContactUs',
          component: ContactUsComponent,
          data: { title: 'ContactUs' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 

        },
        {
          path: 'contactusmesg ',
          component: ContactUsMesgComponent,
          data: { title: 'contactusmesg' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 

        },
        {
          path: 'Notifiacations',
          component: NotificationsComponent,
          data: { title: 'Notifiacations' },
          children:[
            {
              path: 'notification_details',
              component: NotificationDetailsComponent,
              data: { title: 'notification_details' },
            },
            {
              path: 'logout',
              component: LogoutComponent,
              data: { title: 'logout' },
            },
            {
              path: 'AdminInfo',
              component: AdminInformationComponent,
              data: { title: 'AdminInfo' },
            },
          ]
         
        },
        {
          path: 'Advertise',
          component: AdvertisePageComponent,
          data: { title: 'Advertise' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 

        },
        {
          path:'',
          component: MaindashboardpageComponent,
          data: { title: 'admin' }, 
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 
         
        },
        {
          path: 'allgymowners',
          component: AllGymOwnersComponent,
          data: { title: 'allgymowners' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 
         
        },
        {
          path: 'feedback',
          component: FeedbackComponent,
          data: { title: 'feedback' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 
         
        },
        {
          path: 'addadmin',
          component: AddNewAdminComponent,
          data: { title: 'addadmin' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 
         
        },
        {
          path: 'gymGoersandgymOwners',
          component: AllGymOwnerAndGymGoersListComponent,
          data: { title: 'gymGoersandgymOwners' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 
          
        },
        {
          path: 'maindashboard',
          component: MaindashboardpageComponent,
          data: { title: 'maindashboard' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
           {
            path: 'AdminInfo',
            component: AdminInformationComponent,
            data: { title: 'AdminInfo' },
          },
          ] 
        },
        {
          path: 'logout',
          component: LogoutComponent,
          data: { title: 'logout' },
        },
        {
          path: 'AdminInfo',
          component: AdminInformationComponent,
          data: { title: 'AdminInfo' },
        },
        {
          path: '**',
          component: AdminDashBoardComponent,
          data: { title: 'not found' },
          children:
          [
            {
               path: 'logout',
               component: LogoutComponent,
               data: { title: 'logout' },
           },
          ] 
        },
        
      ]
  },

  {
    path:'',redirectTo:"admindashboard",pathMatch:"full"// component: AdminDashBoardComponent,

  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
