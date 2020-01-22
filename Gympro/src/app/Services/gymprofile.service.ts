import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Profile } from '../gymadmin/profile/Profile';

@Injectable({
  providedIn: 'root'
})
export class GymprofileService {

  constructor(private httpClient:HttpClient) { }

  public getData(Gym_id:string)
{
  return this.httpClient.get<Profile>('https://localhost:44338/api/gymprofile/'+Gym_id);
}




uploadAndProgressSingle(file: File){    
 return this.httpClient.post('./assets/Images', file, {reportProgress: true, observe: 'events'});
    
}
}
