import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-edit_profile',
  templateUrl: './edit_profile.component.html',
  styleUrls: ['./edit_profile.component.scss']
})

// tslint:disable-next-line: class-name
export class Edit_profileComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router) {

  }
  profileForm = this.fb.group({
    username: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    passWord: [''],
    address: [''],
    logitude: [''],
    latitude: [''],
  });


  ngOnInit() {

  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
  onShow() {
    
    //this.route.navigate(['/userhome']);
  }
}
