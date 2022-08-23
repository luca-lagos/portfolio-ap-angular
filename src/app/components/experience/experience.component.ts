import { Experience } from './../../models/experience';
import { TokenService } from 'src/app/services/token.service';
import { ExperienceService } from './../../services/experience.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.listExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  listExperience(): void {
    this.experienceService.list().subscribe((data) => {
      this.experience = data;
      console.log(this.experience);
    });
  }

  onDelete(id?: number): void {
    if (id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esto',
        icon: 'warning',
        iconColor: '#f1c40f',
        showCancelButton: true,
        confirmButtonColor: '#f1c40f',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.experienceService.delete(id).subscribe({
            next: (data) => {
              this.listExperience();
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer);
                  toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
              });

              Toast.fire({
                icon: 'success',
                title: 'La educación ha sido eliminada correctamente',
              });
            },
            error: (err) => {
              Swal.fire({
                title: 'Error',
                text: 'Hubo un error al eliminar la experiencia',
                icon: 'error',
                iconColor: '#dc3545',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#dc3545',
              });
            },
          });
        }
      });
    }
  }
}
