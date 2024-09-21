import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply in production
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  const isBlogDomain = hostname === 'blog.g1mishra.dev';

  // Redirect from blog subdomain to main domain for non-blog pages
  if (isBlogDomain && !pathname.startsWith('/blog') && pathname !== '/') {
    return NextResponse.redirect(new URL(`https://g1mishra.dev${pathname}`, request.url));
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
