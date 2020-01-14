import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gymcoustomers',
  templateUrl: './gymcoustomers.component.html',
  styleUrls: ['./gymcoustomers.component.scss']
})
export class GymcoustomersComponent implements OnInit {

  data:any=[{name:'Ayush',joindate:new Date('1/14/2020'),substype:'Monthly',Paidfees:'500',Pending:'0'},{name:'Ayush',joindate:new Date('1/14/2020'),substype:'Monthly',Paidfees:'500',Pending:'0'},{name:'Ayush',joindate:new Date('1/14/2020'),substype:'Monthly',Paidfees:'500',Pending:'0'}];
  constructor() { }

  ngOnInit() {
  }

}
