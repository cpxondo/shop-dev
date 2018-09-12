import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin() {
     // Navigate to the login page with extras
     if (this.loginService.checkStatusUser()) {
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }
}
