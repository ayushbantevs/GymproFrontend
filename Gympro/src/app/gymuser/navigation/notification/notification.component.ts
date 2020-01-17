import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = ['gettyimages-515238274-2048x2048.jpg', 'gym-setup-tips-1.jpg', 'gina-lin-1167578-unsplash-800x510.jpg'];
  }




}