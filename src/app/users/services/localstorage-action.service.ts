import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageActionService {
  constructor() {}

  getUsers(): User[] {
    const jsonUsers = localStorage.getItem('users');
    if (jsonUsers) {
      return JSON.parse(jsonUsers);
    }
    return [];
  }

  checkIfUserExists(email: string): boolean {
    const users = this.getUsers();
    const userExists = users.find((user: User) => user.email === email);
    if (userExists) {
      return true;
    }
    return false;
  }

  addUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUser(email: string): User | undefined {
    const users = this.getUsers();
    return users.find((user: User) => user.email === email);
  }

  /**
   * Rewrites all users to local storage.
   * @param users list of users to be saved
   */
  save(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }
}
