
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EventEmmiterService } from './event-emmiter.service';


import { GymoffersComponent } from './gymadmin/gymoffers/gymoffers.component';
import { GymadminModule } from './gymadmin/gymadmin.module';
import { ProfileComponent } from './gymadmin/profile/profile.component';
import { GymadminRoutingModule } from './gymadmin/gymadmin-routing.module';

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
import { DatePipe } from '@angular/common';



import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GymadminComponent } from './gymadmin/gymadmin.component';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { GymcoustomersComponent } from './gymadmin/gymcoustomers/gymcoustomers.component';
import { NavigationComponent } from './gymuser/navigation/navigation.component';
import { Edit_profileComponent } from './gymuser/navigation/edit_profile/edit_profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GymlistComponent } from './gymuser/navigation/gymlist/gymlist/gymlist.component';
import { MatMenuModule } from '@angular/material';

import { MaplistComponent } from './gymuser/navigation/maplist/maplist.component';
import { SessionlistComponent } from './gymuser/navigation/sessionlist/sessionlist.component';
import { ClasslistComponent } from './gymuser/navigation/classlist/classlist.component';
import { NotificationComponent } from './gymuser/navigation/notification/notification.component';
import { LocationComponent } from './gymuser/navigation/location/location.component';
import {GoogleMapsModule } from '@angular/google-maps';
import { GymsonmapComponent } from './gymuser/navigation/gymlist/gymlist/gymsonmap/gymsonmap.component';
import { SliderModule } from 'angular-image-slider';

import { HttpClientModule } from '@angular/common/http';





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
   
   

    LandingPageComponent,
    GymadminComponent,
    GymlistComponent,
    NavigationComponent,
    Edit_profileComponent,
    UserprofileComponent,
    UserprofileComponent,
    GymoffersComponent,
    GymcoustomersComponent,
    NavigationComponent,
    UserprofileComponent,
    NavigationComponent,
    Edit_profileComponent,
    UserprofileComponent,
    NavigationComponent,
    GymlistComponent,
    ProfileComponent,

    UserprofileComponent,
    MaplistComponent,
    SessionlistComponent,
    ClasslistComponent,
    NotificationComponent,
    LocationComponent,
    GymsonmapComponent,

    UserprofileComponent

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
    MatToolbarModule,
    HttpClientModule,
 
  ],
  providers: [
    EventEmmiterService,
    DatePipe
 
    MatCardModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    MatMenuModule,
    HttpClientModule,
    MatCarouselModule,   
    BrowserModule,
    MatCarouselModule,
    MatMenuModule,
    MatCarouselModule,
    BrowserModule,

    MatCarouselModule, 
    BrowserModule,

    MatCarouselModule,    BrowserModule,
    HttpClientModule,



    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule,
    GoogleMapsModule,
    SliderModule
 

    RouterModule

  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
