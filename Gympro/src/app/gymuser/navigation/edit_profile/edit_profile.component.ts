import { Component, OnInit, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, Validators } from '@angular/forms';
import { Edit_profileService } from './edit_profile.service';
import { editUserModel } from './edituserModel';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material';


// tslint:disable-next-line: no-empty-interface
export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
 }


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-edit_profile',
  templateUrl: './edit_profile.component.html',
  styleUrls: ['./edit_profile.component.scss']
})

// tslint:disable-next-line: class-name
export class Edit_profileComponent implements OnInit {
  hide = true;
  file:boolean=true;
  public imagePath;
  imgURL: any;
  public message: string;


  id: string;
  editUserProfile: editUserModel;
  constructor(
    private fb: FormBuilder,
    private editservice: Edit_profileService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
   public data: DialogData) {}

  profileForm = this.fb.group({
    username: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    passWord: ['', [Validators.required]],
    address: ['', [Validators.required]],
    logitude: ['', [Validators.required]],
    latitude: ['', [Validators.required]],
    city: ['', [Validators.required]],
    pincode: [''],
  });


  ngOnInit() {


  }
  onSubmit() {
    // this.editservice.save(this.profileForm.value).subscribe((data: editUserModel) => {
    //   console.log(data);
    // getEmployee(this.id)
    // {
    // if (this.id === 0) {
    //   this.editUserProfile = {
    //     id: null, username: null, gender: null, contactPreference: null,
    //     phoneNumber: null, email: '', dateOfBirth: null, department: null,
    //     isActive: null, photoPath: null
    //   };
    //   this.profileForm.reset();

    // } else {
      this.editservice.getEmployee(this.id).subscribe(
        (editUser: editUserModel) => { this.editUserProfile = editUser; },
        (err: any) => console.log(err)
      );
    }


    preview(files) {
      if (files.length === 0)
      return;
      
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
      }
      
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
      this.imgURL = reader.result;
      
      
      }
      // reader.onloadend=(_event)=>
      // {
      // this.file=false;
      // }
    
    }
  // }

  // }
}
