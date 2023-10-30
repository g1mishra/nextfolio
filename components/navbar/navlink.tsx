import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, forwardRef } from 'react';

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

    const isActive = exact ? pathname === href : pathname.startsWith(href);

    console.log('isActive', isActive, pathname, href);

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
