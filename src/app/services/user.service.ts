import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = 'http://localhost:8080/users/';
  constructor(private http: HttpClient) {}
  public GetUsers(): Observable<User> {
    return this.http.get<User>(this.URL + 'my-profile');
  }
}
