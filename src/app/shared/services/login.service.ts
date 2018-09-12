import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
      return of(true).pipe(delay(1000));
    } else {
      return of(false).pipe(delay(1000));
    }
  }

  checkStatusUser() {
    return this.userLogged;
  }


}
