import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private router: Router,
    private loginService: LoginService) { }

  canActivate(): boolean {
    return this.checkLogin();
  }

  checkLogin() {
     if (this.loginService.checkStatusUser()) {
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }
}
