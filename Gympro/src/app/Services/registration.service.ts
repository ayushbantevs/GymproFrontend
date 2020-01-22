import { Gymowner } from './../landing-page/gymowner';
import { UserData } from './../admin-dash-board/all-gym-owners/all-gym-owners.component';
import { User } from './../landing-page/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }


      Adduser(user:User)
      {
        
        alert(user);
        return this.httpClient.post("https://localhost:44338/api/UserRegistration/addUser",user);
      }

      Addgymowner(gymowner:Gymowner)
      {
         var GymOwnerData=JSON.stringify(gymowner);
         alert(GymOwnerData);
         return this.httpClient.post("https://localhost:44338/api/UserRegistration/addGymOwner",gymowner);
      }
}
