import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  

  @Output() otp = new EventEmitter();

  // allloginform:boolean=true;


  constructor(private fb: FormBuilder,
    private router: Router,
   // private service: RegistrationService,
    private http: HttpClient) { }

    user_register = this.fb.group({
    
      user_id: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      user_mailId: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      user_contact_no: ['', [Validators.required]],
      
      user_age: ['', [Validators.required]],
      //user_address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]]
     
    });

  ngOnInit() {
  }

//   onFormSubmit1()
//   {
//       // alert("hii");
   
//       this.router.navigateByUrl("home/login");
//  }

backtoLogin()
 {
   this.otp.emit();
 }

}

