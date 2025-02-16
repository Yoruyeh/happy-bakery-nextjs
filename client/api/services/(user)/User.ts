import { fetchWrapper } from '../../config/config';
import {
  UserLoginPayload,
  UserLoginResponse,
  UserRegisterPayload,
  UserRegisterResponse,
  UserInfoResponse,
  UpdateUserInfoPayload,
  UpdateUserInfoResponse,
  UpdateUserPasswordPayload,
  UpdateUserPasswordResponse,
} from '../../types/(user)/user';

export const UserService = {
  login: async (credentials: UserLoginPayload) => {
    return fetchWrapper<UserLoginResponse>('/users/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  register: async (credentials: UserRegisterPayload) => {
    return fetchWrapper<UserRegisterResponse>('/users', {
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

  updatePassword: async (payload: UpdateUserPasswordPayload) => {
    return fetchWrapper<UpdateUserPasswordResponse>('/users/password', {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },
};
