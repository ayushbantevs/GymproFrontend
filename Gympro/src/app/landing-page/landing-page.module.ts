// import { UserPageComponent } from './user-page/user-page.component';
// import { GymPageComponent } from './gym-page/gym-page.component';
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


//import { LoginPageComponent } from './login-page/login-page.component';
//import { MaterialFileInputModule  } from 'ngx-material-file-input';

@NgModule({
  declarations: [
      //LoginPageComponent,
      // GymPageComponent,
      // UserPageComponent
  
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
    //MaterialFileInputModule
     
     

    
  ],
  exports:[ ],
  entryComponents: [
    //LoginPageComponent
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}} ],
  bootstrap: [AppComponent]
})
export class LandingPageModule { }
