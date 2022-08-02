import { JwtDTO } from './../models/jwt-dto';
import { UserLogin } from './../models/login';
import { Observable } from 'rxjs';
import { UserRegister } from './../models/register';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_URL = 'http://localhost:8080/auth';
  constructor(private httpClient: HttpClient) {}

  public register(userRegister: UserRegister): Observable<any> {
    return this.httpClient.post<any>(this.AUTH_URL + '/register', userRegister);
  }

  public login(userLogin: UserLogin): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.AUTH_URL + '/login', userLogin);
  }
}
