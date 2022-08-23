import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(
    private tokenService: TokenService,
    private educationService: EducationService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.listEducation();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  listEducation(): void {
    this.educationService.list().subscribe((data) => {
      this.education = data;
      console.log(this.education);
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
          this.educationService.delete(id).subscribe({
            next: (data) => {
              this.listEducation();
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
                text: 'Hubo un error al eliminar la educación',
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
