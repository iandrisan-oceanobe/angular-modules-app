import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticatedAdmin()) {
      this.router.navigate(['not-authorized']);
      return false;
    }
    return true;
  }
}
