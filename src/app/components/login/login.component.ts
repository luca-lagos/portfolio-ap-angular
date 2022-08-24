import { TokenService } from 'src/app/services/token.service';
import { AuthService } from './../../services/auth.service';
import { UserLogin } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;
  isLogginFail: boolean = false;
  userLogin!: UserLogin;
  email!: string;
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
    this.userLogin = new UserLogin(this.email, this.password);
    this.authService.login(this.userLogin).subscribe({
      next: (data) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.email);
        this.tokenService.setAuthAuthorities(data.authorities);
        this.roles = data.authorities;
        Swal.fire({
          title: 'Success',
          text: 'Ha iniciado sesión correctamente',
          icon: 'success',
          iconColor: '#20c997',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#20c997',
        }).then(() => {
          this.router.navigate(['']);
        });
      },
      error: (err) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error en el inicio de sesión',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
    });
  }
}
