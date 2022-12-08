import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { GooglesolutionComponent } from './googlesolution/googlesolution.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent ,canActivate:[AuthGuard]},
  {path:'courses',component:CoursesComponent,canActivate:[AuthGuard]},
  {path:'googlesolution',component:GooglesolutionComponent,canActivate:[AuthGuard]},
  {path:'Registeration',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
