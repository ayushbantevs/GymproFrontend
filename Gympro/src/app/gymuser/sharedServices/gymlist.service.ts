import { Injectable } from '@angular/core';
import { GymListModel } from '../gymList/gymListModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GymlistService {

  constructor(
    private gymlistservice: GymlistService,
    private httpClient: HttpClient
    ) {

  }


getUserById(userId: string): Observable<GymListModel> {
  return this.httpClient.get<GymListModel>('https://localhost:44338/api/EditUser?id=' + userId);
 }
}
