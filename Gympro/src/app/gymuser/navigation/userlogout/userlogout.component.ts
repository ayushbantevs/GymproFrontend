import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogout',
  templateUrl: './userlogout.component.html',
  styleUrls: ['./userlogout.component.scss']
})
export class UserlogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  // logout()
  // {
  //   this.router.navigate(['/']);
  // }

}
