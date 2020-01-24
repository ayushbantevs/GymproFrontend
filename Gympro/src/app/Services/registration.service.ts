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
        // var gym =JSON.stringify(user);
        // alert(gym);
        return this.httpClient.post("https://localhost:44338/api/UserRegistration/AddGymUser",user);
      }

      Addgymowner(gymowner:Gymowner)
      {
        //  var GymOwnerData=JSON.stringify(gymowner);
        //  alert(GymOwnerData);
         return this.httpClient.post("https://localhost:44338/api/UserRegistration/addGymOwner",gymowner);
      }

      AddLogin(user_name:string,password:string)
      {
        alert(user_name+""+password);
        return this.httpClient.post("https://localhost:44338/api/UserRegistration/UserLogin/",{username:user_name,passWord:password});
      }
      AddGymOwnerLogin(user_name:string,password:string)
      {
        alert(user_name+""+password);
        return this.httpClient.post("https://localhost:44338/api/UserRegistration/OwnerLogin/",{username:user_name,passWord:password});
      }
      
}
