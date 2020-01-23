import { Profile } from './../gymadmin/profile/Profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GymprofileService {
url:any;
  constructor(private httpClient:HttpClient) {}


  public getData(Gym_id:string)
{
  return this.httpClient.get<Profile>('https://localhost:44338/api/gymprofile/'+Gym_id);
}

public updateProfile(updatedData:Profile)
{
  return this.httpClient.put('https://localhost:44338/api/gymprofile/',updatedData);

}

}
