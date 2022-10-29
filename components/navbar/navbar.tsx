import Link from 'next/link';
import { NavLink } from './navlink';

const navlinks = [
  { link: '/', text: ' _hello' },
  { link: '/about-me', text: '_about-me' },
  { link: '/projects', text: '_projects' },
  // { link: '/contact-me', text: '_contact-me' },
];

const Navbar = () => {
  return (
    <header className="hidden sm:flex w-full items-center justify-between px-4 border-light border-b">
      <div className="flex items-center w-full">
        <div className="h-full flex items-center py-2 border-light border-r flex-[0.2] w-full min-w-[12rem]">
          <Link href="/">
            <a className="text-primaryText"> jeevan-kumar</a>
          </Link>
        </div>
        {navlinks.map((linkItem) => (
          <NavLink
            exact
            href={linkItem.link}
            key={linkItem.text}
            activeClassName="border-b-[#FEA55F]"
            className="px-4 h-full py-2 border-light border-r border-y-2 border-y-transparent text-center min-w-[120px]"
          >
            {linkItem.text}
          </NavLink>
        ))}
      </div>
      <NavLink
        exact
        href="/contact-me"
        activeClassName="border-b-[#FEA55F]"
        className="px-4 pr-6 -mr-4 h-full py-2 border-l border-y-2 border-y-transparent border-light min-w-max "
      >
        _contact-me
      </NavLink>
    </header>
  );
};

export default Navbar;
