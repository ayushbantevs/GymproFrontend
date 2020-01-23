import { Component, OnInit, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Edit_profileService } from './edit_profile.service';
import { editUserModel } from './edituserModel';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { element } from 'protractor';
import { useAnimation } from '@angular/animations';


// tslint:disable-next-line: no-empty-interface
export interface DialogData {
 }


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-edit_profile',
  templateUrl: './edit_profile.component.html',
  styleUrls: ['./edit_profile.component.scss']
})

// tslint:disable-next-line: class-name
export class Edit_profileComponent implements OnInit {

  editUserProfile: editUserModel;
  matDialogReference: any;
  message: string;
  imagePath: any;
  imgURL: string | ArrayBuffer;
  constructor(
    private fb: FormBuilder,
    private editservice: Edit_profileService,
    private http: HttpClient,
    private dialogref: MatDialogRef<Edit_profileComponent>,
    @Inject(MAT_DIALOG_DATA)
   public data: DialogData) {}


  profileForm = this.fb.group({
    // userName: new FormControl(),
    // userEmail: new FormControl(),
    // phoneNumber: new FormControl(),
    // passWord: new FormControl(),
    // city: new FormControl(),
    // pincode: new FormControl(),
    userId : [JSON.parse(JSON.stringify(this.data)).userId],
    userName: [''],
    userEmail: [],
    usercontact: [],
    userPassword: [],
    city: [],
    pincode: [],
  });
  ngOnInit() {
    const tempData = JSON.parse(JSON.stringify(this.data));
    this.getUserbyId(tempData.userId);
  }
  onSubmit() {
    this.editservice.updateUser(this.profileForm.value).subscribe(dataElement => {
      console.log('In Update');
      console.log(dataElement);
      this.dialogref.close(this.profileForm.value);
    });

    }

    closeDialog() {

      this.dialogref.close();
    }
    getUserbyId(UserId: string) {
      this.editservice.getUserById(UserId).subscribe(employee => {

        this.profileForm.controls.userName.setValue(employee[0].userName);
        this.profileForm.controls.userEmail.setValue(employee[0].userEmail);
        this.profileForm.controls.usercontact.setValue(employee[0].usercontact);
        this.profileForm.controls.userPassword.setValue(employee[0].userPassword);
        this.profileForm.controls.city.setValue(employee[0].city);
        this.profileForm.controls.pincode.setValue(employee[0].pinCode);
        console.log(employee);
        console.log( this.profileForm.value);
       });
    }
    ngSubmit(editmodel: editUserModel) {
      this.editservice.PostUserdata(editmodel).subscribe(employee => {

    });
  }

  preview(files) {
    if (files.length === 0) {
    return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
    this.message = 'Only images are supported.';
    return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // tslint:disable-next-line: variable-name
    reader.onload = (_event) => {
    this.imgURL = reader.result;
    };
  }
}
