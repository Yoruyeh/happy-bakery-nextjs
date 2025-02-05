import { fetchWrapper } from '../config/config';
import { LoginPayload, LoginResponse } from '../types/common';

export const UserAuthService = {
  login: async (credentials: LoginPayload) => {
    return fetchWrapper<LoginResponse>('/users/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
};
