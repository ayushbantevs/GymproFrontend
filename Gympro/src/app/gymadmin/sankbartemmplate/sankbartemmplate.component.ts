
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-sankbartemmplate',
  templateUrl: './sankbartemmplate.component.html',
  styleUrls: ['./sankbartemmplate.component.scss']
})
export class SankbartemmplateComponent implements OnInit {

  message:any;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
   // console.log(this.data);
  this.message=this.data.Message;
  }

}
