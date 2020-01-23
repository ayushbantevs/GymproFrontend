import { UserPageComponent } from './user-page/user-page.component';
import { GymPageComponent } from './gym-page/gym-page.component';
import { AppComponent } from './../app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';

import { MatDialogModule,  MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';


import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialFileInputModule  } from 'ngx-material-file-input';
import { LandingPageComponent } from './landing-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
      LoginPageComponent,
      GymPageComponent,
      UserPageComponent,
    ForgetPasswordComponent,
    // LandingPageComponent

      

  
  ],
  imports: [
    BrowserModule,
  
    MatCardModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    //MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    //MatRippleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDialogModule,
    MaterialFileInputModule,
    
    
     
     

    
  ],
  entryComponents: [LoginPageComponent],
  exports:[ ],

  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}} ],
  bootstrap: [AppComponent]
})
export class LandingPageModule { }
