import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userURL = 'https://backend-ap-luca-lagos.herokuapp.com/user';
  constructor(private httpClient: HttpClient) {}
  public list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userURL + '/list');
  }

  public detail(id: number): Observable<User> {
    return this.httpClient.get<User>(this.userURL + `/detail/${id}`);
  }

  public save(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userURL + '/add', user);
  }

  public edit(id: number, user: User): Observable<any> {
    return this.httpClient.put<any>(this.userURL + `/edit/${id}`, user);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.userURL + `/delete/${id}`);
  }
}
