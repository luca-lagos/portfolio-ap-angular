import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css'],
})
export class EditSkillsComponent implements OnInit {
  skill: Skill = null!;
  constructor(
    private skillService: SkillService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe({
      next: (data) => {
        this.skill = data;
      },
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al editar la habilidad',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/edit-skill/' + id]);
        });
      },
    });
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.edit(id, this.skill).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Success',
          text: 'La habilidad se ha editado exitosamente',
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
          text: 'Hubo un error al editar la habilidad',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/edit-skill/' + id]);
        });
      },
    });
  }
}
