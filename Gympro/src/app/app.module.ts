
import { RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EventEmmiterService } from './event-emmiter.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';


import {MatCardModule} from '@angular/material/card';
import {Directive, EmbeddedViewRef, Input, OnChanges, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaindashboardpageComponent } from './admin-dash-board/maindashboardpage/maindashboardpage.component';
import { AdvertisePageComponent } from './admin-dash-board/advertise-page/advertise-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatInputModule, MatGridList, MatGridListModule, MatSelectModule, MatOptionModule, MatTableModule, MatTooltip, MatTooltipModule, MatDialogModule, MatToolbar, MatToolbarModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AddNewAdminComponent } from './admin-dash-board/add-new-admin/add-new-admin.component';
import { AddOffersComponent } from './admin-dash-board/add-offers/add-offers.component';
import { AllGymOwnersComponent } from './admin-dash-board/all-gym-owners/all-gym-owners.component';
import { AllUsersComponent } from './admin-dash-board/all-users/all-users.component';
import { AllGymOwnerAndGymGoersListComponent } from './admin-dash-board/all-gym-owner-and-gym-goers-list/all-gym-owner-and-gym-goers-list.component';
import { FeedbackComponent } from './admin-dash-board/feedback/feedback.component';
import { DataSource } from '@angular/cdk/table';
import { NotificationsComponent } from './admin-dash-board/notifications/notifications.component';
import { ContactUsComponent } from './admin-dash-board/contact-us/contact-us.component';
import { ContactUsMesgComponent } from './admin-dash-board/contact-us-mesg/contact-us-mesg.component';
import { NotificationDetailsComponent } from './admin-dash-board/notifications/notification-details/notification-details.component';
import {MatMenuModule} from '@angular/material/menu';
import { LogoutComponent } from './admin-dash-board/logout/logout.component';
import { AdminInformationComponent } from './admin-dash-board/admin-information/admin-information.component';


 

@NgModule({
  declarations: [
    AppComponent,
    AdminDashBoardComponent,
    MaindashboardpageComponent,
    AdvertisePageComponent,
    AddNewAdminComponent,
    AddOffersComponent,
    AllGymOwnersComponent,
    AllUsersComponent,
    AllGymOwnerAndGymGoersListComponent,
    FeedbackComponent,
    MatPaginator,
    NotificationsComponent,
    ContactUsComponent,
    ContactUsMesgComponent,
    NotificationDetailsComponent,
    LogoutComponent,
    AdminInformationComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCarouselModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule, 
    SharedModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    RouterModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule
   
  
  
  ],
  providers: [
    EventEmmiterService,
 
  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
