import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;
  const subdomain = hostname.split('.')[0];
  const isBlogDomain = subdomain === 'blog';

  // Handle blog subdomain
  if (isBlogDomain) {
    return NextResponse.rewrite(new URL(`/blog${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
