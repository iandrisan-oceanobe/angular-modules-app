import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, mergeMap, catchError, concatMap} from 'rxjs/operators';

import {AdminService} from '@fa/users/services/admin.service';
import {EMPTY, of} from 'rxjs';

@Injectable()
export class LoadUsersEffect {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[User List/API] Load Users'),
    concatMap((action) => {
      console.log('action', action)
      return this.userService.getUsersAsync()      .pipe(
        map(users => ({type: '[User List/API] Retrieve Users Success', users})),
        catchError(() => of({type: '[User List/API] Retrieve Users failed', fetchUserError: 'Error fetching users'}))
      )
    }
    )
  ));

  constructor(
    private actions$: Actions,
    private userService: AdminService
  ) {}
}
