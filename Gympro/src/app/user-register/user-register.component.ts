import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
   // private service: RegistrationService,
    private http: HttpClient) { }
    user_register = this.fb.group({
    
      user_name: ['', [Validators.required]],
      user_mailId: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      user_contact_no: ['', [Validators.required]],
      
      user_age: ['', [Validators.required]],
      user_address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]]
     
    });
  
  ngOnInit() {
  }

  onFormSubmit1()
  {
    this.router.navigate(['login']);

  }
  

}

