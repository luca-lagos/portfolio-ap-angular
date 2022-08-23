import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit {
  education: Education = null!;
  actualEduList: any[] = [
    {
      text: 'Si',
      value: true,
    },
    {
      text: 'No',
      value: false,
    },
  ];
  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe({
      next: (data) => {
        this.education = data;
      },
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al editar la educación',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/edit-education/' + id]);
        });
      },
    });
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.education.eduStart !== this.education.eduEnd) {
      this.educationService.edit(id, this.education).subscribe({
        next: (data) => {
          Swal.fire({
            title: 'Success',
            text: 'La educación	se ha editado exitosamente',
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
            text: 'Hubo un error al editar la educación',
            icon: 'error',
            iconColor: '#dc3545',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#dc3545',
          }).then(() => {
            this.router.navigate(['/edit-education/' + id]);
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
}
