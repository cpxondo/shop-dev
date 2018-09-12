import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogged: boolean;

  constructor() {
    this.userLogged = false;
  }

  checkLogin(user: string, pass: string): Observable<boolean> {
    const userDB = 'cpxondo';
    const passDB = 'cacota';
    if (user === userDB && pass === passDB) {
      this.userLogged = true;
      return of(true);
    } else {
      return of(false);
    }
  }

  checkStatusUser() {
    return this.userLogged;
  }


}
