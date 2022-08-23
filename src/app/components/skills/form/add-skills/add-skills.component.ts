import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css'],
})
export class AddSkillsComponent implements OnInit {
  name: string = '';
  percentage: number = 0;
  constructor(private skillService: SkillService, private router: Router) {}

  ngOnInit(): void {}

  onAdd(): void {
    const skill = new Skill(this.name, this.percentage);
    this.skillService.save(skill).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Success',
          text: 'La habilidad se ha añadido exitosamente',
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
          text: 'Hubo un error al añadir la habilidad',
          icon: 'error',
          iconColor: '#dc3545',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigate(['/add-skill']);
        });
      },
    });
  }
}
