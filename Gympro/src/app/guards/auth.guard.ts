import { AppAdminLoginComponent } from './../admin-dash-board/app-admin-login/app-admin-login.component';
import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private dialog:MatDialog) { }  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
    if (this.isLoggedIn()) {      
    return true;      
    }      
    // navigate to login page as user is not authenticated      
    const dialogRef = this.dialog.open(AppAdminLoginComponent, {
      width: 'auto',
      height:'auto',  
      data: {message: "", email: "",name:""}
   });

  // this.router.navigate(['']);      
   return false;    
  }

  public isLoggedIn(): boolean {      
    let status = false;      
    if (localStorage.getItem('isLoggedIn') == "true") {      
       status = true;      
    }    
    else {      
       status = false;      
       }      
    return status;      
    }    
}
