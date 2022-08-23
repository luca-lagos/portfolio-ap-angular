import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/services/about-me.service';
import { AboutMe } from 'src/app/models/about-me';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-about-me',
  templateUrl: './add-about-me.component.html',
  styleUrls: ['./add-about-me.component.css'],
})
export class AddAboutMeComponent implements OnInit {
  description: string = '';
  constructor(private aboutMeService: AboutMeService, private router: Router) {}

  ngOnInit(): void {}

  onAdd(): void {
    const aboutMe = new AboutMe(this.description);
    this.aboutMeService.save(aboutMe).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Success',
          text: 'La descripción se ha añadido exitosamente',
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
          text: 'Hubo un error al añadir la descripción',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/add-about-me']);
        });
      },
    });
  }
}
