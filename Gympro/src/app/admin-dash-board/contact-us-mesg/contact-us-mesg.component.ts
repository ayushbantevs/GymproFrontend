import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserData } from '../notifications/notifications.component';

@Component({
  selector: 'app-contact-us-mesg',
  templateUrl: './contact-us-mesg.component.html',
  styleUrls: ['./contact-us-mesg.component.scss']
})
export class ContactUsMesgComponent implements OnInit {


  
  constructor(
    public dialogRef: MatDialogRef<ContactUsMesgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) { }

  ngOnInit() {

  }

}
