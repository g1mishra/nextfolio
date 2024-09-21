import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, forwardRef } from 'react';

type Props = {
  href: string;
  exact?: boolean;
  activeClassName?: string;
  children: string | ReactElement;
  isBlogDomain: boolean;
} & JSX.IntrinsicElements['a'];

const NavLink = forwardRef<HTMLAnchorElement, Props>(
  (
    { href, exact = false, children, className, activeClassName = '', isBlogDomain, ...props },
    ref
  ) => {
    const pathname = usePathname();

    const isActive = exact
      ? pathname === href
      : pathname.startsWith(href) || (href === '/blog' && isBlogDomain);

    let finalHref = href;
    if (isBlogDomain) {
      if (href === '/') {
        finalHref = 'https://g1mishra.dev/';
      } else if (href === '/blog') {
        finalHref = '/';
      } else if (href.startsWith('/blog/')) {
        finalHref = href.replace('/blog', '');
      }
    }

    return (
      <Link
        href={finalHref}
        className={`${className} ${isActive ? `text-white ${activeClassName}` : ''}`}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };

