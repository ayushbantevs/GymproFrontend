import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialAngularSelectModule} from 'node_modules/material-angular-select';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    MaterialAngularSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
