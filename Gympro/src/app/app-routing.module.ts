import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymadminComponent } from './gymadmin/gymadmin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Edit_profileComponent } from './gymuser/navigation/edit_profile/edit_profile.component';


const routes: Routes = [
  {path: 'gymadmin', component: GymadminComponent},
  {path: 'edituserprofile', component: Edit_profileComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
