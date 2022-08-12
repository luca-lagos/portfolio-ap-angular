import { ExperienceService } from './../../../../services/experience.service';
import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css'],
})
export class EditExperienceComponent implements OnInit {
  experience: Experience = null!;
  workTimeList: string[] = [
    'Jornada parcial',
    'Jornada completa',
    'Contrato',
    'Pasantías',
  ];
  actualWorkList: any[] = [
    {
      text: 'Si',
      value: true,
    },
    {
      text: 'No',
      value: false,
    },
  ];
  workEndState: boolean = false;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe({
      next: (data) => {
        this.experience = data;
      },
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al editar la experiencia',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/edit-experience/' + id]);
        });
      },
    });
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.experience.workStart !== this.experience.workEnd) {
      this.experienceService.edit(id, this.experience).subscribe({
        next: (data) => {
          Swal.fire({
            title: 'Success',
            text: 'La experiencia se ha editado exitosamente',
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
            text: 'Hubo un error al editar la experiencia',
            icon: 'error',
            iconColor: '#dc3545',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#dc3545',
          }).then(() => {
            this.router.navigate(['/edit-experience/' + id]);
          });
        },
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        title: 'Las fechas de inicio y final no deben ser iguales',
        icon: 'warning',
        iconColor: '#f1c40f',
      });
    }
  }
  onSelectActualWork(): void {
    if (this.experience.actualWork === true) {
      this.workEndState = true;
    } else {
      this.workEndState = false;
    }
  }

  goBack(): void {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Perderás los datos ingresados',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Volver',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/edit-experience/:id']);
      }
    });
  }
}
