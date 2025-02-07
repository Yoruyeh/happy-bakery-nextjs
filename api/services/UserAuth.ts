import { fetchWrapper } from '../config/config';
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from '../types/common';

export const UserAuthService = {
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
};
