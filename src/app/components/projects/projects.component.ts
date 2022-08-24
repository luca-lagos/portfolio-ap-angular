import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  project: Project[] = [];
  constructor(
    private projectService: ProjectService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.listProjects();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  listProjects(): void {
    this.projectService.list().subscribe((data) => {
      this.project = data;
      console.log(this.project);
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
          this.projectService.delete(id).subscribe({
            next: (data) => {
              this.listProjects();
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
                title: 'El proyecto ha sido eliminado correctamente',
              });
            },
            error: (err) => {
              Swal.fire({
                title: 'Error',
                text: 'Hubo un error al eliminar el proyecto',
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
