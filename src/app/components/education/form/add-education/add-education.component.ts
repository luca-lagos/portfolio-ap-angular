import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
})
export class AddEducationComponent implements OnInit {
  title: string = '';
  instituteName: string = '';
  instituteImg: string = '';
  eduStart: Date = new Date();
  eduEnd: Date = new Date();
  actualEdu: boolean = false;
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
    private router: Router
  ) {}

  ngOnInit(): void {}

  onAdd(): void {
    if (this.actualEdu === true) {
      this.eduEnd = new Date('0000-00-00 00:00:00.000000');
    }
    const education = new Education(
      this.title,
      this.instituteName,
      this.instituteImg,
      this.eduStart,
      this.eduEnd,
      this.actualEdu
    );
    if (this.eduStart !== this.eduEnd) {
      this.educationService.save(education).subscribe({
        next: (data) => {
          Swal.fire({
            title: 'Success',
            text: 'La educación se ha añadido exitosamente',
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
            text: 'Hubo un error al añadir la educación',
            icon: 'error',
            iconColor: '#dc3545',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#dc3545',
          }).then(() => {
            this.router.navigate(['/add-education']);
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
