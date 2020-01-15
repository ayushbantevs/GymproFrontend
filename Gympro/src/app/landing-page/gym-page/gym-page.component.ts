import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-gym-page',
  templateUrl: './gym-page.component.html',
  styleUrls: ['./gym-page.component.scss']
})
export class GymPageComponent implements OnInit {

 // control : FormControl=new FormControl("");
  @Output() otp = new EventEmitter();

  constructor(private fb: FormBuilder,
    
    private http: HttpClient,
    private route: Router,public dialog: MatDialog) { }
    
  ngOnInit() {
  }
  registrationForm = this.fb.group({
    
    gym_Name: ['', [Validators.required]],
    gym_Owner_Name: ['', [Validators.required]],
    gym_Address: ['', [Validators.required]],
    gym_Pincode:['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    gym_Website:['', [Validators.required]],
    gym_MailId: ['', [Validators.required]],
    registration_Date: ['', [Validators.required]],
    password: ['', [Validators.required]],
    gym_Certification_Number: ['', [Validators.required]],
    gym_Location_logitude: ['', [Validators.required]],
    gym_Location_latitude: ['', [Validators.required]],
    company_Registration_Date: ['', [Validators.required]],
    service_Tax_Number: ['', [Validators.required]],
    gst_Number: ['', [Validators.required]],
  },
  );

  // funbacktologin()
  //  {
  //   this.route.navigateByUrl("home/login");
  //   //this.route.navigate(['/login']);
  // }

  backtoLogin()
  {
     this.otp.emit();
  }

}
