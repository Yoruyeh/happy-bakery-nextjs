import { fetchWrapper } from '../config/config';
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  UserInfoResponse,
  UpdateUserInfoPayload,
  UpdateUserInfoResponse,
} from '../types/user';

export const UserService = {
  login: async (credentials: LoginPayload) => {
    return fetchWrapper<LoginResponse>('/users/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  register: async (credentials: RegisterPayload) => {
    return fetchWrapper<RegisterResponse>('/users', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  getUserInfo: async () => {
    return fetchWrapper<UserInfoResponse>('/users');
  },

  updateUserInfo: async (payload: UpdateUserInfoPayload) => {
    return fetchWrapper<UpdateUserInfoResponse>('/users', {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },
};
