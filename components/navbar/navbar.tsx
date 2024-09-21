import Link from 'next/link';
import { NavLink } from './navlink';

export const navlinks = [
  { link: '/', text: ' _hello' },
  { link: '/about-me', text: '_about-me' },
  { link: '/projects', text: '_projects' },
  // { link: '/contact-me', text: '_contact-me' },
];

const Navbar = () => {
  return (
    <header className="hidden sm:flex w-full items-center justify-between border-light border-b">
      <div className="h-full px-4 flex items-center py-2.5 border-light border-r w-[calc(18rem_+_4rem)]">
        <Link href="/" className="text-primaryText">
          jeevan-kumar
        </Link>
      </div>
      <div className="flex flex-1 justify-start w-full items-cente">
        {navlinks.map((linkItem) => (
          <NavLink
            exact={linkItem.link !== '/about-me'}
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
        href="/contact-me"
        activeClassName="border-b-[#FEA55F]"
        className="px-4 h-full py-2.5 border flex items-center border-y-2 border-transparent border-l-light min-w-max "
      >
        _contact-me
      </NavLink>
    </header>
  );
};

export default Navbar;
