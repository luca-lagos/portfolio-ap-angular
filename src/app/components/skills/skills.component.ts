import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
  constructor(
    private skillService: SkillService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.listSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  listSkill(): void {
    this.skillService.list().subscribe((data) => {
      this.skill = data;
      console.log(this.skill);
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
          this.skillService.delete(id).subscribe({
            next: (data) => {
              this.listSkill();
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
                title: 'La habilidad ha sido eliminada correctamente',
              });
            },
            error: (err) => {
              Swal.fire({
                title: 'Error',
                text: 'Hubo un error al eliminar la habilidad',
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

  formatSubtitle = (percent: number): string => {
    if (percent <= 100 && percent >= 75) {
      return 'Nivel avanzado';
    } else if (percent <= 74 && percent >= 40) {
      return 'Nivel intermedio';
    } else if (percent > 0) {
      return 'Nivel básico';
    } else {
      return 'Nivel 0';
    }
  };
}
