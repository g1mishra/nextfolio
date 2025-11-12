'use client';

import Link from 'next/link';
import { NavLink } from './navlink';
import { getBasePath, getBlogBasePath } from '@lib/common';
import { getProfile } from '@lib/config';

export const navlinks = [
  { link: getBasePath(), text: '_hello', exact: true },
  { link: getBasePath('/about-me'), text: '_about-me' },
  { link: getBasePath('/projects'), text: '_projects' },
  { link: getBlogBasePath(), text: '_blog' },
];

const Navbar = () => {
  const profile = getProfile();
  
  return (
    <header className="hidden sm:flex w-full items-center justify-between border-light border-b">
      <div className="h-full px-4 flex items-center py-2.5 border-light border-r w-[calc(18rem_+_4rem)]">
        <Link href={getBasePath()} className="text-primaryText">
          {profile.username}
        </Link>
      </div>
      <div className="flex flex-1 justify-start w-full items-center whitespace-nowrap">
        {navlinks.map((linkItem) => (
          <NavLink
            exact={linkItem?.exact ?? false}
            href={linkItem.link}
            key={linkItem.text}
            activeClassName="border-b-[#FEA55F]"
            className="px-6 h-full py-2.5 border-light border-r border-y-2 border-y-transparent text-center min-w-[120px]"
          >
            {linkItem.text}
          </NavLink>
        ))}
      </div>
      <NavLink
        exact
        href={getBasePath('/contact-me')}
        activeClassName="border-b-[#FEA55F]"
        className="px-4 h-full py-2.5 border flex items-center border-y-2 border-transparent border-l-light min-w-max "
      >
        _contact-me
      </NavLink>
    </header>
  );
};

export default Navbar;
