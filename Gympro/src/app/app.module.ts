
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import { LoginPageComponent } from './landing-page/login-page/login-page.component';
import { UserPageComponent } from './landing-page/user-page/user-page.component';
import { GymPageComponent } from './landing-page/gym-page/gym-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    LandingPageModule
 
     

    
  ],
  entryComponents: [
    LoginPageComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
