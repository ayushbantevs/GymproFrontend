import { Admin } from './../admin-dash-board/admin';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }

 
  AddAdmin(Admin:Admin)
  {   
    var admindata = JSON.stringify(Admin);
   // alert(queryString);
    return this.httpClient.post("https://localhost:44338/api/AppAdmin",'',{params:{AdminData:admindata} });
  }
}
