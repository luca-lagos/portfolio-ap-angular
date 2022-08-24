import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      icon: 'warning',
      iconColor: '#f1c40f',
      showCancelButton: true,
      confirmButtonColor: '#f1c40f',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Si, seguro',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tokenService.logOut();
        window.location.reload();
      }
    });
  }
}
