export interface LoginPayload {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  admin: boolean;
}

export interface LoginResponse {
  status: 'success' | 'error';
  message: string;
  token?: string;
  user?: User;
}
