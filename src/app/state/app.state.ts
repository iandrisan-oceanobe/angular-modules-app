import { User } from '../users/models/user.model';

export interface AppState {
  isAuth: boolean;
  users: Array<User>;
  error: string;
}
