import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export { NavLink };

type Props = {
  href: string;
  exact?: boolean;
  children: string | ReactElement;
} & JSX.IntrinsicElements['a'];

function NavLink({
  href,
  exact = false,
  children,
  className = '',
  ...props
}: Props) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a className={`${className} ${isActive ? 'text-white' : ''}`} {...props}>
        {children}
      </a>
    </Link>
  );
}
