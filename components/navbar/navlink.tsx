import { getBasePath, getBlogBasePath } from '@lib/common';
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
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
      const hostname = window.location.hostname;
      const currentPath = hostname.includes('blog')
        ? getBlogBasePath('')
        : getBasePath(pathname === '/' ? '' : pathname);
      setIsActive(exact ? currentPath === href : currentPath.includes(href));
    }, [pathname, exact, href]);

    return (
      <Link
        href={href}
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
