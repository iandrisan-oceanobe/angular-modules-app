import { createReducer, on, Action } from '@ngrx/store';

import {errorUserList, retrievedUserList} from './users.actions';
import { User } from '../../users/models/user.model';

export const initialState: Array<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { users }) => [...users]),
);

export const errorInitialState = '';

export const errorUserReducer = createReducer(
  errorInitialState,
  on(errorUserList, (state, {fetchUserError}) => fetchUserError),
);
