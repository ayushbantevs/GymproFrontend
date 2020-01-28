import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { MatMenuModule } from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { GymadminRoutingModule } from './gymadmin-routing.module';
import { GymadminComponent } from './gymadmin.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { GymoffersComponent } from './gymoffers/gymoffers.component';
import { GymcoustomersComponent } from './gymcoustomers/gymcoustomers.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatDatepickerModule, MatFormFieldModule, MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SankbartemmplateComponent } from './sankbartemmplate/sankbartemmplate.component';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [GymadminComponent,ProfileComponent, GymoffersComponent, GymcoustomersComponent, SankbartemmplateComponent],
  imports: [
    CommonModule,
     MatIconModule,
     MatSidenavModule,
    MatToolbarModule,
    GymadminRoutingModule,
     HttpClientModule,
     MatIconModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDividerModule,
    ReactiveFormsModule,
   MatListModule,
   MatButtonModule,
   MatMenuModule,
   MatCarouselModule,
   MatSnackBarModule,
   MatChipsModule,
   ScrollingModule
  ],
providers: [
    DatePipe,
    RouterModule,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  exports:[],
  entryComponents:[SankbartemmplateComponent]
})
export class gymadminmModule { }
