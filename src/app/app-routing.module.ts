import { AddExperienceComponent } from './components/experience/form/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/form/edit-experience/edit-experience.component';
import { AddEducationComponent } from './components/education/form/add-education/add-education.component';
import { EditEducationComponent } from './components/education/form/edit-education/edit-education.component';
import { AddSkillsComponent } from './components/skills/form/add-skills/add-skills.component';
import { EditSkillsComponent } from './components/skills/form/edit-skills/edit-skills.component';
import { AddProjectsComponent } from './components/projects/form/add-projects/add-projects.component';
import { EditProjectsComponent } from './components/projects/form/edit-projects/edit-projects.component';
import { AddAboutMeComponent } from './components/about-me/form/add-about-me/add-about-me.component';
import { EditAboutMeComponent } from './components/about-me/form/edit-about-me/edit-about-me.component';
import { AddHomeComponent } from './components/home/form/add-home/add-home.component';
import { EditHomeComponent } from './components/home/form/edit-home/edit-home.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recovery-password', component: RecoveryPasswordComponent },
  { path: 'add-experience', component: AddExperienceComponent },
  { path: 'edit-experience/:id', component: EditExperienceComponent },
  { path: 'add-education', component: AddEducationComponent },
  { path: 'edit-education/:id', component: EditEducationComponent },
  { path: 'add-skill', component: AddSkillsComponent },
  { path: 'edit-skill/:id', component: EditSkillsComponent },
  { path: 'add-project', component: AddProjectsComponent },
  { path: 'edit-project/:id', component: EditProjectsComponent },
  { path: 'add-about-me', component: AddAboutMeComponent },
  { path: 'edit-about-me/:id', component: EditAboutMeComponent },
  { path: 'add-user', component: AddHomeComponent },
  { path: 'edit-user/:id', component: EditHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
