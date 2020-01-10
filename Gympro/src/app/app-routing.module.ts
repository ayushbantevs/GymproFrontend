import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';






const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'user-register',component: UserRegisterComponent},
   { path: 'home',component: LandingPageComponent},
  // { path: '',   redirectTo: 'home', pathMatch: 'full' },
  
  // {path: '', redirectTo: 'register', pathMatch: 'full'},
  // {path: '', redirectTo: 'user-register', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
