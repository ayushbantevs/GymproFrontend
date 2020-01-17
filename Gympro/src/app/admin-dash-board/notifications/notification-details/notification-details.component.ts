
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserData } from '../notifications.component';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<NotificationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) { }

  ngOnInit() {
  }

}
