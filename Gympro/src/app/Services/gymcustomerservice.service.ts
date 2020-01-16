import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GymcustomerserviceService {

  constructor(private httpClient:HttpClient) { }


  getAllCustomers(gymId)
  {
    return this.httpClient.get("https://localhost:44338/api/gymcoustomer/"+gymId);
  }

  
  changeStatus(gymId,userId)
  {
    return this.httpClient.get("https://localhost:44338/api/gymcoustomer/"+gymId+"/"+userId);
  }

}
