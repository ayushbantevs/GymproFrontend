import { LoginPageComponent } from './login-page/login-page.component';
import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog,MatDialogClose} from '@angular/material/dialog';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  //   autoplay:boolean=false;
  //  interval:string="200";
  

  constructor(private route:Router,public dialog: MatDialog) { }
  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},
  {url:'../assets/Images/pexels-photo-1954524.jpeg'},
  {url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];
  
  ngOnInit() {
  }

  Login():void{

       const dialogRef = this.dialog.open(LoginPageComponent, {
         height:'auto',
        width: 'auto',
      data: {name: '', animal: ''}

    
    });
   
 dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });






      
  }


}
