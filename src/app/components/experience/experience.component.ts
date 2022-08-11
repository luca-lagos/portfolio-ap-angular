import { Experience } from './../../models/experience';
import { TokenService } from 'src/app/services/token.service';
import { ExperienceService } from './../../services/experience.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.listExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  listExperience(): void {
    this.experienceService.list().subscribe((data) => {
      this.experience = data;
    });
  }
}
