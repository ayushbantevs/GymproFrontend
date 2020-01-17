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

 file:boolean=true;
  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private fb: FormBuilder, private route: Router) {

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
  onShow() {
    
    //this.route.navigate(['/userhome']);
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
 
}
