import { ContactUsMesgComponent } from './../admin-dash-board/contact-us-mesg/contact-us-mesg.component';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
    declarations: [
        
    ],
    exports: [ 
       FormsModule,
       MatInputModule,
       ReactiveFormsModule,
       MatFormFieldModule,
       MatDatepickerModule,
       MatNativeDateModule,
    ],
})
export class SharedModule {
}