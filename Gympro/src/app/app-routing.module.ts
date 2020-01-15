import { GymPageComponent } from './landing-page/gym-page/gym-page.component';
import { LoginPageComponent } from './landing-page/login-page/login-page.component';
import { UserPageComponent } from './landing-page/user-page/user-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
//import { UserRegisterComponent } from './user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { RegisterComponent } from './register/register.component';



const routes: Routes = [
     { path: 'home',component: LandingPageComponent,
        children:[
          {
            path:'login',component:LoginPageComponent,
            // children:[{
            //   path:'user-page',component:UserPageComponent,

            // }]
           },
             {
               path:'user-page',component:UserPageComponent,
           },
            {
              path:'gym-page',component:GymPageComponent,
           },
              
        ]
        
          // {
          //   path:'user-page',component:UserPageComponent
          // },
         
   },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
  ];
 
  
  // {path: '', redirectTo: 'register', pathMatch: 'full'},
  // {path: '', redirectTo: 'user-register', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent }


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
