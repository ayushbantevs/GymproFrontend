import { Injectable } from '@angular/core';
import { editUserModel } from './edituserModel';
import { observable, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class Edit_profileService {

  baseurl:'https://localhost:44338/api/EditUser/EditUserProfile';
  editUser: editUserModel;
  constructor(private httpClient: HttpClient) {

  }
  save(editUser: editUserModel): Observable<editUserModel> {
    return this.httpClient.post<editUserModel>('https://localhost:44338/api/EditUser/EditUserProfile',
    editUser, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }
  getEmployee(id: string): Observable<editUserModel> {
    return this.httpClient.get<editUserModel>(`${this.baseurl}/${id}`);
  }
}
