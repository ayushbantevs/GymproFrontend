import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminDashBoardComponent, AdminData } from '../admin-dash-board.component';

@Component({
  selector: 'app-admin-information',
  templateUrl: './admin-information.component.html',
  styleUrls: ['./admin-information.component.scss']
})
export class AdminInformationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminDashBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminData) { }

  ngOnInit() {
  }

}
