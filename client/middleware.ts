import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserService } from './api/services/(user)/User';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Admin登入前台會出錯，移除token導回login page
  const { status } = await UserService.getUserInfo();

  const response = NextResponse.next();

  if (status === 'error') {
    const redirectResponse = NextResponse.redirect(
      new URL('/login', request.url)
    );
    redirectResponse.cookies.delete('token');
    request.cookies.delete('token');
    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: ['/profile/:path*', '/cart/:path*', '/checkout/:path*'],
};
