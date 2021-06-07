import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  AuthenticatedUser,
  LoginUserCredentials,
} from 'src/app/users/models/user.model';
import { LocalstorageActionService } from '../../users/services/localstorage-action.service';
import { CookieService } from '../../users/services/cookie.service';
import { StringManipulationService } from './string-manipulation.service';
import { login, logout } from '../../state/auth/auth.actions';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordModalComponent } from '@fa/app/users/change-password-modal/change-password-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private localStorageService: LocalstorageActionService,
    private cookieService: CookieService,
    private stringManipulationService: StringManipulationService,
    private router: Router,
    private store: Store<{ isAuth: boolean }>,
    public dialog: MatDialog
  ) {}

  authenticateUser(user: LoginUserCredentials): string {
    const userFromDatabase = this.localStorageService.getUser(user.email);

    if (!userFromDatabase) {
      return 'Wrong username or password';
    }

    if (userFromDatabase.hasToResetPassword === true && user.password === '') {
      this.dialog.open(ChangePasswordModalComponent, {
        width: '500px',
        data: { email: user.email },
      });
      return '';
    }

    if (userFromDatabase.password !== user.password) {
      return 'Wrong username or password';
    }

    delete userFromDatabase.password;
    delete userFromDatabase.hasToResetPassword;

    this.cookieService.setCookie(
      'token',
      this.stringManipulationService.generateRandomString(64)
    );
    this.cookieService.setCookie('userInfo', JSON.stringify(userFromDatabase));
    this.store.dispatch(login());
    this.router.navigate(['/']);

    return '';
  }

  isAuthenticated(): boolean {
    if (this.cookieService.getCookie('token')) {
      this.store.dispatch(login());
      return true;
    }
    this.store.dispatch(logout());
    return false;
  }

  logoutUser(): void {
    this.cookieService.eraseCookie('token');
    this.cookieService.eraseCookie('userInfo');
    this.store.dispatch(logout());
  }

  getAuthenticatedUser(): AuthenticatedUser {
    return JSON.parse(this.cookieService.getCookie('userInfo') || '{}');
  }

  isAuthenticatedAdmin(): boolean {
    const user = JSON.parse(this.cookieService.getCookie('userInfo') || '{}');
    if (user.role === 'Admin' || user.role === 'ReadOnly Admin') {
      return true;
    }
    return false;
  }
}
