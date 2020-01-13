import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit_profile',
  templateUrl: './edit_profile.component.html',
  styleUrls: ['./edit_profile.component.scss']
})

// tslint:disable-next-line: class-name
export class Edit_profileComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }
  profileForm = this.fb.group({
    username: [''],
    phoneNumber: [''],
    passWord: [''],
    address: [''],
    logitude: [''],
    latitude: [''],
      zip: [''],
  });


  ngOnInit() {

  }
  onSubmitEdit() {
console.log(this.profileForm.value);
  }
}
