import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonLayoutComponent } from './user/layouts/common-layout';
// import { CommonLayoutComponent } from './user/layouts/common-layout/common-layout.component';



const routes: Routes = [

  { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
  // { path: 'user', component: CommonLayoutComponent}
  //  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  //    { path: 'dashboard-custom', component: Dashboard2Component, pathMatch: 'full' },
  //   { path: 'forms', component: FormsComponent, pathMatch: 'full' },
  //   { path: 'charts', component: ChartsComponent, pathMatch: 'full' },
  //   { path: 'components', component: ComponentsComponent, pathMatch: 'full' },
  //   { path: '**', redirectTo: '/pages/404' },
  // ] }, // add 'canActivate: AuthGuard' for catching unauth users
  // { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
  // { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule' },
  // { path: 'pages', loadChildren: './pages/pages/pages.module#PagesModule' },
  // { path: '**', redirectTo: '/pages/404' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
