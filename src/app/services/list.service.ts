import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Users } from '../Users';
@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3004/users';
  constructor(private http: HttpClient) {}

  // remove(users: User[], user: User) {
  //   return users.filter((a: User) => user.id !== a.id);
  // }

  getAll(): Observable<Users> {
    return this.http.get<Users>(this.apiUrl);
  }
}
