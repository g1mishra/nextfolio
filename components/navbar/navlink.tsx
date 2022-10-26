import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export { NavLink };

type Props = {
  href: string;
  exact?: boolean;
  activeClassName?: string;
  children: string | ReactElement;
} & JSX.IntrinsicElements['a'];

function NavLink({
  href,
  exact = false,
  children,
  className = '',
  activeClassName = '',
  ...props
}: Props) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        className={`${className} border-y-2 border-y-transparent  ${
          isActive ? 'text-white ' + activeClassName : ''
        } `}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
