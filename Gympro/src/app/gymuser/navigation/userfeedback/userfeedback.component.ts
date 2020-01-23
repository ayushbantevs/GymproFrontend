
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserfeedbackComponent implements OnInit {

   @Input('rating') private rating1: number = 2;
   @Input('starCount') private starCount: number = 5;
   @Input('color') private color: string = 'accent';
  // @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  private ratingArr = [];
  
  rt:number;
   
  constructor(private snackBar: MatSnackBar) { }


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
