import { Admin } from './../admin-dash-board/admin';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    }    

 
  AddAdmin(Admin:Admin)
  {   
    var admindata = JSON.stringify(Admin);
   // alert(queryString);
    return this.httpClient.post("https://localhost:44338/api/AppAdmin/"+admindata,'');
  }

  AppAdminLogin(loginemail:string,loginPassword:string)
  {   
    return this.httpClient.post("https://localhost:44338/api/AppAdmin/"+loginemail+"/"+loginPassword,"");
  }

  getAllgymUsers(allUsers:string)
  { 
    
     return this.httpClient.get("https://localhost:44338/api/AppAdmin/AllgymUsersGet");
    
  }

  getAllgymOwners(allGymOwners:string)
  { 
    
     return this.httpClient.get("https://localhost:44338/api/AppAdmin/getgymowners");
    
  }

  getAdminInformation(Adminemail:string)
  { 
    
     return this.httpClient.get("https://localhost:44338/api/AppAdmin/getAppAdminInfo/"+Adminemail);
    
  }

  getAllContactMessage()
  { 
    
     return this.httpClient.get("https://localhost:44338/api/AppAdmin/getAllContactMessage");
    
  }

  getSubcriptionNotifications()
  {
    return this.httpClient.get("https://localhost:44338/api/AppAdmin/getNotifications");
  }
  

}
