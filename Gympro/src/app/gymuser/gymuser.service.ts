import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GymuserService {

  constructor(private http:HttpClient) { }


getdata(){
 return this.http.get("https://localhost:44338/api/userapi");
}
//  getAllEmployee(): Observable<Employee[]> {
//     return this.http.get<Employee[]>(this.url + '/AllEmployeeDetails');
//   }
    
  
}
