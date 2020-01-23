import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import {  } from 'events';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

 


  constructor(private fb:FormBuilder,private route: Router,public dialog: MatDialog) { }

 
  Forget_password=this.fb.group({
                                  password : ['', [Validators.required]]
                               });

 @Output() otp = new EventEmitter();

  ngOnInit() {

    
  }

 
  backtoLogin()
  {
    this.otp.emit();
  }
 

// onFormSubmit()
// {

// }

}