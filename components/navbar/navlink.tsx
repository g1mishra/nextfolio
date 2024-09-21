import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, forwardRef, useEffect, useState } from 'react';

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
      setIsBlogDomain(window.location.hostname === 'blog.g1mishra.dev');
    }, []);

    let isActive = exact
      ? pathname === href
      : pathname.startsWith(href) || (href === '/blog' && isBlogDomain);

    if (typeof children === 'string') {
      isActive = children === '_hello' && !isBlogDomain;
    }

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
