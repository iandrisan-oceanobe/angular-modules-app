import { Injectable } from '@angular/core';

import { LocalstorageActionService } from './localstorage-action.service';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import {
  retrievedUserList,
} from 'src/app/state/users/users.actions';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  users$: Observable<Array<User>> = this.store.select('users');

  constructor(
    private localstorageService: LocalstorageActionService,
    private store: Store<AppState>
  ) {}

  getUsersAsync(): Observable<User[]> {
    return new Observable((obs: any) => {
      setTimeout(() => {
        // if (Math.random() > 0.5) {
        //   obs.error('Error fetching users');
        // }
        const users: User[] = this.localstorageService.getUsers();
        obs.next(users);
        obs.complete();
      }, 1000);
    });
  }

  deleteUserAsync(email: string): Observable<any> {
    return new Observable((obs: any) => {
      console.log(email)
      // const users: User[] = this.localstorageService.getUsers();
      // const filteredUsers: User[] = users.filter((user) => user.email !== email);
      // this.localstorageService.save(filteredUsers);
      obs.next();
      obs.complete();
    });
  }

  editUser(): void {
  }

  deleteUser(email: string): void {
    const users: User[] = this.localstorageService.getUsers();
    const filteredUsers: User[] = users.filter((user) => user.email !== email);
    this.localstorageService.save(filteredUsers);
    this.store.dispatch(retrievedUserList({ users: filteredUsers }));
  }

  makeUserResetPassword(email: string): void {
    const users: User[] = this.localstorageService.getUsers();
    const updatedUsers: User[] = users.map((user) => {
      if (user.email === email) {
        return { ...user, hasToResetPassword: true };
      }
      return user;
    });
    this.localstorageService.save(updatedUsers);
    this.store.dispatch(retrievedUserList({ users: updatedUsers }));
  }

  addUser(): void {}
}
