import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  title: string = '';
  description: string = '';
  linkWeb: string = '';
  projectStart: Date = new Date();
  projectEnd: Date = new Date();
  actualProject: boolean = false;
  actualProjectList: any[] = [
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
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    if (this.actualProject === true) {
      this.projectEnd = new Date('0000-00-00 00:00:00.000000');
    }
    const project = new Project(
      this.title,
      this.description,
      this.linkWeb,
      this.projectStart,
      this.projectEnd,
      this.actualProject,
    );
    if (this.projectStart !== this.projectEnd) {
      this.projectService.save(project).subscribe({
        next: (data) => {
          Swal.fire({
            title: 'Success',
            text: 'El proyecto se ha añadido exitosamente',
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
            text: 'Hubo un error al añadir el proyecto',
            icon: 'error',
            iconColor: '#dc3545',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#dc3545',
          }).then(() => {
            this.router.navigate(['/add-project']);
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
