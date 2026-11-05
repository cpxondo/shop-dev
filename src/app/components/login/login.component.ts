import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoginComponent implements OnDestroy {

  user = '';
  pass = '';
  loginResult = '';
  subscription?: Subscription;

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  login() {
    this.subscription = this.loginService.checkLogin(this.user, this.pass)
    .pipe(take(1))
    .subscribe(isSuccess => {
      if (isSuccess) {
        this.router.navigate(['/profile']);
      } else {
        this.loginResult = 'Invalid credentials';
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
