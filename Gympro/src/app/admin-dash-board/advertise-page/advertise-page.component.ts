import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-advertise-page',
  templateUrl: './advertise-page.component.html',
  styleUrls: ['./advertise-page.component.scss']
})
export class AdvertisePageComponent implements OnInit {
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit() {
  }

}
