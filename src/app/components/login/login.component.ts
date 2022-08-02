import { TokenService } from 'src/app/services/token.service';
import { AuthService } from './../../services/auth.service';
import { UserLogin } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;
  isLogginFail: boolean = false;
  userLogin!: UserLogin;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthAuthorities();
    }
  }

  onLogin(): void {
    this.userLogin = new UserLogin(this.userName, this.password);
    this.authService.login(this.userLogin).subscribe(
      /*
      ** Deprecated subscribe use **
      (data) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.user_name);
        this.tokenService.setAuthAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      },
      (err) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      }*/
      {
        next: (data) => {
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.user_name);
          this.tokenService.setAuthAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['']);
        },
        error: (err) => {
          this.isLogged = false;
          this.isLogginFail = true;
          this.errorMessage = err.error.message;
          console.log(this.errorMessage);
        },
      }
    );
  }
}
