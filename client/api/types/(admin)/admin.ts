export interface AdminLoginPayload {
  email: string;
  password: string;
}

interface LoginUser {
  id: number;
  email: string;
  admin: boolean;
}

export interface AdminLoginResponse {
  status: 'success' | 'error';
  message: string;
  token?: string;
  user?: LoginUser;
}

export interface AdminInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AdminInfoResponse {
  user: AdminInfo;
}

export interface UpdateAdminPasswordPayload {
  currentPW: string;
  newPW: string;
  confirmPW: string;
}

export interface UpdateAdminPasswordResponse {
  status: 'success' | 'error';
  message: string;
}
