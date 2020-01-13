import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { GymadminRoutingModule } from './gymadmin-routing.module';
import { GymadminComponent } from './gymadmin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { GymoffersComponent } from './gymoffers/gymoffers.component';
import { GymcoustomersComponent } from './gymcoustomers/gymcoustomers.component';




@NgModule({
  declarations: [GymadminComponent,ProfileComponent, GymoffersComponent, GymcoustomersComponent],
  imports: [
    CommonModule,
    MatIconModule,MatSidenavModule,
    ,MatToolbarModule,GymadminRoutingModule,
    
  ]
})
export class GymadminModule { }
