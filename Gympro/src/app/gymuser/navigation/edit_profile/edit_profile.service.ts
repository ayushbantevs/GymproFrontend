import { Injectable } from '@angular/core';
import { editUserModel } from './edituserModel';
import { observable, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class Edit_profileService {
  constructor(private httpClient: HttpClient) {

  }
  editUser: editUserModel;

  // Update(editUser: editUserModel): Observable<editUserModel> {
  //   return this.httpClient.put<editUserModel>('https://localhost:44338/api/EditUser/UpdateUser',
  //   editUser,
  //   {
  //       headers: new HttpHeaders({
  //           'Content-Type': 'application/json'
  //       }
  //       )
  //   });
  // }


// getuser(id: string): Observable<editUserModel> {
//   return this.httpClient.get<editUserModel>(`${this.baseurl}/${id}`);
// }
  updateUser(user: editUserModel): Observable<editUserModel> {
    console.log('In Service');
    console.log(user);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.put<editUserModel>('https://localhost:44338/api/EditUser/UpdateUser', user, httpOptions);

  }

// getuser(id: string): Observable<editUserModel> {
//   return this.httpClient.get<editUserModel>(`${this.baseurl}/${id}`);
// }

getUserById(userId: string): Observable<editUserModel> {
  return this.httpClient.get<editUserModel>('https://localhost:44338/api/EditUser?id=' + userId);
}


PostUserdata(postdata: editUserModel): Observable<editUserModel> {
    return this.httpClient.post<editUserModel>('https://localhost:44338/api/EditUser=', postdata);
}

}
