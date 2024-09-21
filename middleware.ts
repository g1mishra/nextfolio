import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  const isBlogDomain = hostname === 'blog.g1mishra.dev';

  // Handle blog subdomain
  if (isBlogDomain) {
    // Rewrite root path to /blog
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/blog', request.url));
    }
    // For other paths, keep them as is (don't add /blog prefix)
    return NextResponse.next();
  }

  // Redirect from main domain /blog to blog subdomain
  if (!isBlogDomain && pathname.startsWith('/blog')) {
    return NextResponse.redirect(
      new URL(`https://blog.g1mishra.dev${pathname.replace('/blog', '')}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
