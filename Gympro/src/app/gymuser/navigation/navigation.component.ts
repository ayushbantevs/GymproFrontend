import { GymlistComponent } from './gymlist/gymlist/gymlist.component';
import { Edit_profileComponent } from './edit_profile/edit_profile.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  
  constructor(private route: Router, private dialog:MatDialog ) { }

  ngOnInit() {
  }

   Editprofile():void{
    const dialogRef = this.dialog.open(Edit_profileComponent, {
    height:'auto',
    width: 'auto',
    data: {name: '', animal: ''}
    });
    }

    gymlist():void{
      const dialogRef=this.dialog.open(GymlistComponent,{
        height:'700px',
        width:'900px',
        data: {name: '', animal: ''}
      });
      }
    }


