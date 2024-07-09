import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('pathname', request.url);

  const loginCookie = request.cookies.get('sb-bhueokryhdaxzxnhjqgx-auth-token.0');
  requestHeaders.set('isUser', loginCookie ? 'true' : 'false');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
