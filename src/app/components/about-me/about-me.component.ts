import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AboutMeService } from 'src/app/services/about-me.service';
import { AboutMe } from 'src/app/models/about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  aboutMe: AboutMe[] = [];

  constructor(
    private aboutMeService: AboutMeService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.listAboutMe();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  listAboutMe(): void {
    this.aboutMeService.list().subscribe((data) => {
      this.aboutMe = data;
      console.log(this.aboutMe);
    });
  }
}
