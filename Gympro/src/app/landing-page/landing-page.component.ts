import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private route:Router) { }
  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},
  {url:'../assets/Images/pexels-photo-1954524.jpeg'},
  {url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];
  
  ngOnInit() {
  }


  Login():void{

      //  const dialogRef = this.dialog.open(LoginPageComponent, {
      //    height:'auto',
      //   width: 'auto',
      // data: {name: '', animal: ''}

    
  //  });
   
      
  
    

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
     
    // });

      
  }


  funAppadminlogin()
  {
    this.route.navigate(['admindashboard']);
  }

}
