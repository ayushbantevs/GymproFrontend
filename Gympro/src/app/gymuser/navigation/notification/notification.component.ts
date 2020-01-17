import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  changeListener($event, index: number) : void {
    this.readThis($event.target, index);
                  }


readThis(inputValue: any, index: number): void {
    var file:File = inputValue.files[1];
    var myReader:FileReader = new FileReader();

    // myReader.onloadend = (e) => {
    //     this.currentUserData.familyMembers[index].person.imagePath = myReader.result;
    // }
    myReader.readAsDataURL(file);

}
}