import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { AuthenticatedUser, User } from '../models/user.model';
import { AuthenticationService } from '@fa/authentication/services/authentication.service';
import { AdminService } from '@fa/users/services/admin.service';
import { CookieService } from '@fa/users/services/cookie.service';
import { LocalstorageActionService } from '@fa/users/services/localstorage-action.service';
import { AppState } from '@fa/state/app.state';
import { EditUserModalComponent } from '@fa/users/edit-user-modal/edit-user-modal.component';
import {deleteUser, loadUsers} from '@fa/state/users/users.actions';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  users$: Observable<Array<User>> = this.store.select('users');
  error$: Observable<string> = this.store.select('error');
  displayedColumns: string[] = [
    'email',
    'name',
    'role',
    'phone',
    'hasToResetPassword',
    'edit',
    'delete',
    'reset',
  ];
  authenticatedUser!: AuthenticatedUser;

  constructor(
    private userService: LocalstorageActionService,
    private cookieService: CookieService,
    private authService: AuthenticationService,
    private adminService: AdminService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.authenticatedUser = this.authService.getAuthenticatedUser();
    this.store.dispatch(
      loadUsers()
    );
  }

  onEdit(user: User): void {
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      width: '500px',
      data: { user },
    });
  }

  onDelete(email: string): void {
    // console.log('emai', email)
    // if (confirm(`Are you sure you want to delete user ${email}?`)) {
      this.store.dispatch(deleteUser({
        email
      }));
    // }
  }

  onReset(email: string): void {
    if (confirm(`Are you sure you want make ${email} to reset password?`)) {
      this.adminService.makeUserResetPassword(email);
    }
  }
}
