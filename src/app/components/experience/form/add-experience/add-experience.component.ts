import { Router } from '@angular/router';
import { ExperienceService } from './../../../../services/experience.service';
import { Experience } from 'src/app/models/experience';
import { Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {
  jobName: string = '';
  jobDescription: string = '';
  businessName: string = '';
  businessImg: string = '';
  location: string = '';
  countryLocation: string = '';
  workTime: string = '';
  workStart: Date = new Date();
  workEnd: Date = new Date();
  actualWork: boolean = false;
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
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onAdd(): void {
    if (this.actualWork === true) {
      this.workEnd = new Date('0000-00-00 00:00:00.000000');
    }
    const experience = new Experience(
      this.jobName,
      this.jobDescription,
      this.businessName,
      this.businessImg,
      this.location,
      this.countryLocation,
      this.workTime,
      this.workStart,
      this.workEnd,
      this.actualWork
    );
    if (this.workStart !== this.workEnd) {
      console.log(
        this.jobName,
        this.jobDescription,
        this.businessName,
        this.businessImg,
        this.location,
        this.countryLocation,
        this.workTime,
        this.workStart,
        this.workEnd,
        this.actualWork
      );
      this.experienceService.save(experience).subscribe({
        next: (data) => {
          Swal.fire({
            title: 'Success',
            text: 'La experiencia se ha añadido exitosamente',
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
            text: 'Hubo un error al añadir la experiencia',
            icon: 'error',
            iconColor: '#dc3545',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#dc3545',
          }).then(() => {
            this.router.navigate(['/add-experience']);
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
    if (this.actualWork === true) {
      this.workEndState = true;
    } else {
      this.workEndState = false;
    }
  }
}
