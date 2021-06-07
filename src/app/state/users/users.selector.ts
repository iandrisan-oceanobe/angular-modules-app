import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from 'src/app/users/models/user.model';
import { AppState } from '../app.state';

export const getUsersState = createFeatureSelector<AppState>('users');

export const selectUsers = createSelector(
  getUsersState,
  (state: AppState) => state.users
);
