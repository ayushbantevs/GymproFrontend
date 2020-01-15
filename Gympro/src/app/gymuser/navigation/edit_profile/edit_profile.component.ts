import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-edit_profile',
  templateUrl: './edit_profile.component.html',
  styleUrls: ['./edit_profile.component.scss']
})

// tslint:disable-next-line: class-name
export class Edit_profileComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }
  profileForm = this.fb.group({
    username: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    passWord: ['',[Validators.required]],
    address: ['',[Validators.required]],
    logitude: ['',[Validators.required]],
    latitude: ['',[Validators.required]],
  });


  ngOnInit() {

  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
