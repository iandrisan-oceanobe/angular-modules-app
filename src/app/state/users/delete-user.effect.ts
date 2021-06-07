import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, mergeMap, catchError, exhaustMap, concatMap} from 'rxjs/operators';

import {AdminService} from '@fa/users/services/admin.service';
import {EMPTY, of} from 'rxjs';

@Injectable()
export class DeleteUserEffect {

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType('[User] Delete user'),
    concatMap((action) => {
        console.log('actiondasad', action)
        return this.userService.deleteUserAsync('').pipe(
          map(() => ({type: '[User List/API] Load Users'})),
          catchError(() => EMPTY)
        );
      }
    )
  ));

  constructor(
    private actions$: Actions,
    private userService: AdminService
  ) {}
}
// Mai incercam dupa masa cu asta :)
