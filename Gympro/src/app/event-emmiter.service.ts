import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmmiterService {

  invokeFirstComponentFunction = new EventEmitter();    
  Gym_Owners=new EventEmitter();
  Gym_Goers=new EventEmitter();
  subsVar: Subscription; 

  constructor() { }

  onFirstCardClick()
   {    
    this.invokeFirstComponentFunction.emit(); 
    this.subsVar
   }
   onSecondCardClick()
   {    
    
    this.Gym_Owners.emit(); 
   }
   onThirdCardClick()
   {    
    this.Gym_Goers.emit(); 
   }
}
