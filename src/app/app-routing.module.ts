import { AddExperienceComponent } from './components/experience/form/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/form/edit-experience/edit-experience.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
