import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_NAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  roles: Array<string> = [];
  constructor() {}

  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setUserName(userName: string): void {
    window.localStorage.removeItem(USER_NAME_KEY);
    window.sessionStorage.setItem(USER_NAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USER_NAME_KEY)!;
  }

  public setAuthAuthorities(authAuthorities: string[]): void {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(
      AUTHORITIES_KEY,
      JSON.stringify(authAuthorities)
    );
  }

  public getAuthAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).array.forEach(
        (authority: any) => {
          this.roles.push(authority.authority);
        }
      );
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
