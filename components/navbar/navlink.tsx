import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, forwardRef, useEffect, useState } from 'react';

export { NavLink };

type Props = {
  href: string;
  exact?: boolean;
  activeClassName?: string;
  children: string | ReactElement;
} & JSX.IntrinsicElements['a'];

const NavLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, exact = false, children, className, activeClassName = '', ...props }, ref) => {
    const pathname = usePathname();
    const [isBlogDomain, setIsBlogDomain] = useState(false);

    useEffect(() => {
      setIsBlogDomain(window.location.hostname.startsWith('blog.'));
    }, []);

    const isActive = exact
      ? pathname === href
      : pathname.startsWith(href) || (href === '/blog' && isBlogDomain);

    let finalHref = href;
    if (isBlogDomain && href === '/') {
      finalHref = 'https://g1mishra.dev/';
    } else if (isBlogDomain && href === '/blog') {
      finalHref = '/';
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
