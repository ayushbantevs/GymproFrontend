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
    // var  body = new LabeledValue();
    // body.Email="ayush";
    // body.PartnerId="dfdskj";
    // body.UserName="sdhgasjdg";
    // console.log(body);
    
     const headers = new HttpHeaders().set('content-type', 'text');
    // var json = JSON.parse(JSON.stringify(body)) ;
    // console.log(json);

   //var json=JSON.parse(JSON.stringify(body));
   console.log(data);
  
   return this.httpClient.post("https://localhost:44338/api/gymcoustomer/",data,{headers});
  }
  putMethodtemp()
  {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var  body = new LabeledValue();
    body.Email="ayush";
    body.PartnerId="dfdskj";
    body.UserName="sdhgasjdg";
    console.log(body);
   var json=JSON.parse(JSON.stringify(body));
 

    this.httpClient.put("https://localhost:44338/api/gymcoustomer/1","",{headers}).subscribe((data)=>{
      console.log(data);
    })
  }
  

 

}
 