import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},
  {url:'../assets/Images/pexels-photo-1954524.jpeg'},
  {url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];
  
  ngOnInit() {
  }

<<<<<<< Updated upstream
=======
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


  funAppadminlogin()
  {
    this.route.navigate(['admindashboard']);
  }

>>>>>>> Stashed changes
}
