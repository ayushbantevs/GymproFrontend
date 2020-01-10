import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
      //private router: Router,
     // private service: RegistrationService,
      private http: HttpClient,
      private route: Router
  ) {

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


  ngOnInit() {
  }

  onFormSubmit1()
  {
    this.route.navigate(['login']);

  }
  

}
