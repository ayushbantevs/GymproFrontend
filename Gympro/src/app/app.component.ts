import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  events: string[] = [];
  
  title = 'Gympro';

  

  imgpro:any=[{url:'../assets/Images/gym-setup-tips-1.jpg'},
  {url:'../assets/Images/pexels-photo-1954524.jpeg'},
  {url:'../assets/Images/gina-lin-1167578-unsplash-800x510.jpg'}];
  
  
}
