import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BoundTextAst } from '@angular/compiler';


class LabeledValue {
  UserName: string;
  Email: string;
  PartnerId: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class GymcustomerserviceService {

  constructor(private httpClient:HttpClient) { }


  getAllCustomers(gymId)
  {
    return this.httpClient.get("https://localhost:44338/api/gymcoustomer/"+gymId);
  }

  
  changeStatus(gymId,userId,status)
  {
    return this.httpClient.get("https://localhost:44338/api/gymcoustomer/"+gymId+"/"+userId+"/"+status);
  }



  postMethodtemp(data:any)
  {
     const headers = new HttpHeaders().set('content-type', 'application/json');
     const params = new HttpParams().set("p",data);
   console.log(data);
  
   return this.httpClient.post("https://localhost:44338/api/gymcoustomer/putmethodtestsecond",data,{headers,params});
  }


  putMethodtemp(data:any)
  {
     
   //return this.httpClient.put("https://localhost:44338/api/gymcoustomer/putmethodtestsecond/",data,{params:{id:n,id2:'2'}});
  }
  

 

}
 