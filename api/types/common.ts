export interface LoginPayload {
  email: string;
  password: string;
}

interface LoginUser {
  id: number;
  email: string;
  admin: boolean;
}

interface RegisterUser {
  id: number;
  email: string;
  cart_id: number;
}

export interface LoginResponse {
  status: 'success' | 'error';
  message: string;
  token?: string;
  user?: LoginUser;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  termsAgreement: boolean;
  gender: string;
}

export interface RegisterResponse {
  status: 'success' | 'error';
  message: string;
  token?: string;
  user?: RegisterUser;
}
