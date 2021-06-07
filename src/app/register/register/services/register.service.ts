import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../users/models/user.model';
import { LocalstorageActionService } from 'src/app/users/services/localstorage-action.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private router: Router,
    private localsotrageActions: LocalstorageActionService
  ) {}

  registerUser(user: User): string {
    if (this.localsotrageActions.checkIfUserExists(user.email)) {
      return 'User already exists';
    }

    this.localsotrageActions.addUser(user);
    this.router.navigate(['/login']);
    return '';
  }
}
