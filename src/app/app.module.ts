import { interceptorProvider } from './services/interceptor-service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es-AR');

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { AddExperienceComponent } from './components/experience/form/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/form/edit-experience/edit-experience.component';
import { AddEducationComponent } from './components/education/form/add-education/add-education.component';
import { EditEducationComponent } from './components/education/form/edit-education/edit-education.component';
import { AddAboutMeComponent } from './components/about-me/form/add-about-me/add-about-me.component';
import { EditAboutMeComponent } from './components/about-me/form/edit-about-me/edit-about-me.component';
import { AddHomeComponent } from './components/home/form/add-home/add-home.component';
import { EditHomeComponent } from './components/home/form/edit-home/edit-home.component';
import { AddProjectsComponent } from './components/projects/form/add-projects/add-projects.component';
import { EditProjectsComponent } from './components/projects/form/edit-projects/edit-projects.component';
import { AddSkillsComponent } from './components/skills/form/add-skills/add-skills.component';
import { EditSkillsComponent } from './components/skills/form/edit-skills/edit-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryPasswordComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    AddEducationComponent,
    EditEducationComponent,
    AddAboutMeComponent,
    EditAboutMeComponent,
    AddHomeComponent,
    EditHomeComponent,
    AddProjectsComponent,
    EditProjectsComponent,
    AddSkillsComponent,
    EditSkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
  ],
  providers: [interceptorProvider, { provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
