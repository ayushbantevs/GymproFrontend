import { AdminServiceService } from './../../Services/admin-service.service';
import { Component, OnInit, Inject, ViewChild,NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserData } from '../notifications/notifications.component';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-contact-us-mesg',
  templateUrl: './contact-us-mesg.component.html',
  styleUrls: ['./contact-us-mesg.component.scss']
})
export class ContactUsMesgComponent implements OnInit {

  constructor( private adminservise:AdminServiceService,
    public dialogRef: MatDialogRef<ContactUsMesgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,private _ngZone: NgZone) { }


    @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

    triggerResize() {
      // Wait for changes to be applied, then trigger textarea resize.
      this._ngZone.onStable.pipe(take(1))
          .subscribe(() => this.autosize.resizeToFitContent(true));
    }

  ngOnInit() {

  }

  MarkReadMessageClick(msg_id:string)
  {
    this.adminservise.markReadMessage(msg_id).subscribe(data=>{ });
  }
}
