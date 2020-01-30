import { GymuserService } from './../../gymuser.service';

import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserfeedbackComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
    else{
      this.disabledSubmitButton = true;
    }
  }




   @Input('rating') private rating1: number = 2;
   @Input('starCount') private starCount: number = 5;
   @Input('color') private color: string = 'accent';
  // @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  private ratingArr = [];
  
  rt:number;
   
  constructor(private snackBar: MatSnackBar,
    fb: FormBuilder, private connectionService: GymuserService
    ) {

      this.contactForm = fb.group({
        'controlforuserid': ['', Validators.required],
        'controlforgymid': ['', Validators.required],
        // 'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
       'controlformessage': ['', Validators.required],
        'controlfordate': ['', Validators.required],
        //'controlforicon': ['', Validators.requiredTrue],
        });
      }
      
  ngOnInit() {
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    //console.log(rating)
    this.rt=rating;
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
    });
 
   
  }

  onSubmit(){
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  showIcon(index:number) {
      this.rating1=this.rt;
    if (this.rating1 >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
// export enum StarRatingColor {
//   primary = "primary",
//   accent = "accent",
//   warn = "warn",

// }
