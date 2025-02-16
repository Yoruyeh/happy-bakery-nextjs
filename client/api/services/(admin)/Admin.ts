import { fetchWrapper } from '../../config/config';
import {
  AdminLoginPayload,
  AdminLoginResponse,
  AdminInfoResponse,
  UpdateAdminPasswordPayload,
  UpdateAdminPasswordResponse,
} from '@/api/types/(admin)/admin';

export const AdminService = {
  login: async (credentials: AdminLoginPayload) => {
    return fetchWrapper<AdminLoginResponse>('/admin/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  getAdminInfo: async () => {
    return fetchWrapper<AdminInfoResponse>('/admin');
  },

  updatePassword: async (payload: UpdateAdminPasswordPayload) => {
    return fetchWrapper<UpdateAdminPasswordResponse>('/admin/password', {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },
};
