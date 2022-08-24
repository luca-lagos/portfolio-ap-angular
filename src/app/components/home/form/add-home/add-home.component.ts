import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css'],
})
export class AddHomeComponent implements OnInit {
  name: string = '';
  lastname: string = '';
  profession: string = '';
  location: string = '';
  countryLocation: string = '';
  userProfileImg: string = '';
  userBackgroundImg: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onAdd(): void {
    const user = new User(
      this.name,
      this.lastname,
      this.profession,
      this.location,
      this.countryLocation,
      this.userProfileImg,
      this.userBackgroundImg
    );

    this.userService.save(user).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Success',
          text: 'Los datos se han añadido exitosamente',
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
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al añadir los datos',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/add-user']);
        });
      },
    });
  }
}
