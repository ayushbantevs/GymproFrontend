import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ILogin } from '../landing-page/login-page/login';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<ILogin[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: ILogin) {
        return this.http.post(`/users/register`, user);
    }

    update(user: ILogin) {
        return this.http.put(`/users/` + user.UserId, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}