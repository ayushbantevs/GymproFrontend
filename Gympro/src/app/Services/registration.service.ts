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
var userdata = JSON.stringify(user);
// alert(queryString);
return this.httpClient.post("https://localhost:44338/api/UserRegistration",'',{params:{UserData:userdata} });
}
}
