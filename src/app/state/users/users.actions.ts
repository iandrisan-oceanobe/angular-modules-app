import { createAction, props } from '@ngrx/store';

import { User } from '../../users/models/user.model';


export const loadUsers = createAction('[User List/API] Load Users');

export const deleteUser = createAction('[User] Delete User', props<{email: string}>());

export const retrievedUserList = createAction(
  '[User List/API] Retrieve Users Success',
  props<{ users: User[] }>()
);

export const errorUserList = createAction(
  '[User List/API] Retrieve Users failed',
  props<{ fetchUserError: string }>()
);
