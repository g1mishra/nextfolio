import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavLink } from './navlink';

const navlinks = [
  { link: '/', text: ' _hello' },
  { link: '/about-me', text: '_about-me' },
  { link: '/projects', text: '_projects' },
  { link: '/blog', text: '_blog' },
  { link: '/contact-me', text: '_contact-me' },
];

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="z-20 w-full flex flex-col">
      <div className="z-[21] border-b border-light p-4 flex justify-between">
        <Link href="/" className="text-primaryText">
          jeevan-kumar
        </Link>
        <button className="text-[24px] w-6 h-6 " onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
                fill="#607B96"
              ></path>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#607B96"></path>
            </svg>
          )}
        </button>
      </div>
      {open ? (
        <div className="z-20 w-full absolute h-full bg-secondaryBG overflow-hidden inset-x-0 header-transition">
          <div className="h-[57px]" />
          {navlinks.map((linkItem) => (
            <NavLink
              exact
              href={linkItem.link}
              key={linkItem.text}
              className="w-full p-4 border-b border-light flex items-center"
            >
              {linkItem.text}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  );
};

export default NavbarMobile;
