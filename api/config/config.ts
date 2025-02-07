'use server';

import { cookies } from 'next/headers';

interface Config {
  baseUrl: string;
  headers: Record<string, string>;
}

// 預設
const API_CONFIG: Config = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
  headers: {
    'Content-Type': 'application/JSON',
  },
};

// 自定義
export async function fetchWrapper<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const requestUrl = `${API_CONFIG.baseUrl}${endpoint}`;

  const requestHeader: Record<string, string> = {
    ...API_CONFIG.headers,
    ...(options?.headers as Record<string, string>),
  };

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value ?? '';

  if (token) {
    requestHeader['Authorization'] = `Bearer ${token}`;
  }

  try {
    const { headers: _, ...restOptions } = options || {};

    const response = await fetch(requestUrl, {
      headers: requestHeader,
      ...restOptions,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}
