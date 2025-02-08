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

export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  address: string;
  phone: string;
  birthday: string;
}

export interface UserInfoResponse {
  user: UserInfo;
}

export interface UpdateUserInfoPayload {
  firstName?: string;
  lastName?: string;
  gender?: string;
  email: string;
  address?: string;
  phone?: string;
  birthday?: string;
}

export interface UpdateUserInfoResponse {
  status: 'success' | 'error';
  message: string;
  user: UserInfo;
}

export interface UpdatePasswordPayload {
  currentPW: string;
  newPW: string;
  confirmPW: string;
}

export interface UpdatePasswordResponse {
  status: 'success' | 'error';
  message: string;
}
