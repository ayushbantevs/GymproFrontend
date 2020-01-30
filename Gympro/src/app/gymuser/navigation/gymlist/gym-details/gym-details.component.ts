import { DialogData } from './../../edit_profile/edit_profile.component';
import { GymlistComponent } from './../gymlist/gymlist.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GymuserService } from 'src/app/gymuser/gymuser.service';
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserData } from 'src/app/admin-dash-board/notifications/notifications.component';

@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.scss']
})


// export interface UserData {
//   id: string;
//   Name: string;
//   Address: string;
//   enddate: string;
//   startdate:string;
//   Action:string;
//   contact:string;
// }


export class GymDetailsComponent implements OnInit {


  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  selectedUser: any;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private connectionService:GymuserService,
              private fb:FormBuilder,
               private matdialog:MatDialog,
               private ref:MatDialogRef<GymDetailsComponent>,
               @Inject(MAT_DIALOG_DATA) public data: UserData,) {

    this.contactForm = fb.group({
      'controlforGymid': ['', Validators.required],
      'controlforGymName': ['', Validators.required],
     'controlforGymAddress': ['', Validators.compose([Validators.required, Validators.email])],
    // 'controlforGymAddress': ['', Validators.required],
     'controlforGymContact': ['', Validators.requiredTrue],
      'controlfordate': ['', Validators.required],
     
      });
   }

  ngOnInit() {
    
  
  }
  onSubmit(){
    //this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //  alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
   // });
     (error: any) => {
    // console.log('Error', error);
    }
  }

}
