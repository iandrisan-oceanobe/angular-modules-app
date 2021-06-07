export type roles = 'User' | 'Admin' | 'ReadOnly Admin';

export interface User {
  email: string;
  name: string;
  role: roles;
  password?: string;
  phone?: string;
  hasToResetPassword?: boolean;
}

export interface AuthenticatedUser {
  email: string;
  name: string;
  role: roles;
  phone?: string;
}

export interface LoginUserCredentials {
  email: string;
  password: string;
}
