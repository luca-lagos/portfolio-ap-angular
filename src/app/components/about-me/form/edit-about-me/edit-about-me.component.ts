import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/services/about-me.service';
import { AboutMe } from 'src/app/models/about-me';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css'],
})
export class EditAboutMeComponent implements OnInit {
  aboutMe: AboutMe = null!;
  constructor(
    private aboutMeService: AboutMeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutMeService.detail(id).subscribe({
      next: (data) => {
        this.aboutMe = data;
      },
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al editar la descripción',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/edit-about-me/' + id]);
        });
      },
    });
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutMeService.edit(id, this.aboutMe).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Success',
          text: 'La descripción se ha editado exitosamente',
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
          text: 'Hubo un error al editar la descripción',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/edit-about-me/' + id]);
        });
      },
    });
  }
}
