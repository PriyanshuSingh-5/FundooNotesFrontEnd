import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './Components/notes/notes.component';

import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
   { path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password',component: ResetPasswordComponent},
  {path: 'dashboard', component: DashboardComponent,children:[
    {path: 'notes',component: NotesComponent}
    
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
