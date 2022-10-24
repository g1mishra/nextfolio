import Link from 'next/link';
import { NavLink } from './navlink';

export const scrollIntoId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const Navbar = () => {
  return (
    <header className="hidden sm:flex w-full items-center justify-between px-4 border-light border-b">
      <div className="flex items-center w-full">
        <div className="h-full flex items-center py-2 border-light border-r flex-[0.2] w-full min-w-[12rem]">
          <Link href="/">
            <a className="text-[#607b96]"> jeevan-kumar</a>
          </Link>
        </div>
        <NavLink
          exact
          href="/"
          className="px-4 h-full py-2 border-light border-r text-center min-w-[120px]"
        >
          _hello
        </NavLink>
        <NavLink
          exact
          href="/about-me"
          className="px-4 h-full py-2 border-light border-r text-center min-w-[120px]"
        >
          _about-me
        </NavLink>
        <NavLink
          exact
          href="/projects"
          className="px-4 h-full py-2 border-light border-r text-center min-w-[120px]"
        >
          _projects
        </NavLink>
      </div>
      <NavLink
        exact
        href="/contact-me"
        className="px-4 h-full py-2 border-l border-light min-w-max "
      >
        _contact-me
      </NavLink>
    </header>
  );
};

export default Navbar;
