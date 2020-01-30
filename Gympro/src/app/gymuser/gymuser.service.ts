import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GymuserService {
  url: string = 'http://localhost:3000/send';
  constructor(private http:HttpClient) { }


getdata(){
 return this.http.get("https://localhost:44338/api/userapi");
}
//  getAllEmployee(): Observable<Employee[]> {
//     return this.http.get<Employee[]>(this.url + '/AllEmployeeDetails');
//   }
sendMessage(messageContent: any) {
  return this.http.post(this.url,
  JSON.stringify(messageContent),
  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
}
}
