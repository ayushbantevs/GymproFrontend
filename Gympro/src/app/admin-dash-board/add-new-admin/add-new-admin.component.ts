import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.scss']
})
export class AddNewAdminComponent implements OnInit {


  
  
  
  
  
  

  name = new FormControl('', [ Validators.required, Validators.email, ]);
  email = new FormControl('', [ Validators.required, Validators.email, ]);

  contact_no = new FormControl('', [ Validators.required, Validators.email, ]);

  password = new FormControl('', [ Validators.required, Validators.email, ]);

  Admin_Id = new FormControl('', [ Validators.required, Validators.email, ]);

  conferm_password = new FormControl('', [ Validators.required, Validators.email, ]);
 
  Admin_password = new FormControl('', [ Validators.required, Validators.email, ]);

  alldata=  new FormControl('', [ Validators.required, Validators.email, ]);


 // matcher = new MyErrorStateMatcher();


  constructor() { }

  ngOnInit() {
  }

}
