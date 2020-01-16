import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
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

  public  Gym_register:FormGroup;

  constructor(private fb: FormBuilder,
    
    private http: HttpClient,
    private route: Router,public dialog: MatDialog) { }
    
  public ngOnInit(): void{
  

    this.Gym_register = new FormGroup({
      gym_Name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      gym_owner_Name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email_id: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      phone_number: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      gym_address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      pincode: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      website: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      certificate_no: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      service_tax: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl(new Date()),
      Gst_no: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });

}
public hasError = (controlName: string, errorName: string) =>{
  return this.Gym_register.controls[controlName].hasError(errorName);
}
  
  backtoLogin()
  {
     this.otp.emit();
  }

}
