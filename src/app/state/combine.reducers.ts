import { authReducer } from './auth/auth.reducer';
import {errorUserReducer, usersReducer} from './users/users.reducer';

export const combinedReducers = {
  isAuth: authReducer,
  users: usersReducer,
  error: errorUserReducer
};
