'use client';

import useMediaQuery from 'hooks/useMediaQuery';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HighlightBoxBG2 } from './gradient-box';
import Navbar from './navbar/navbar';
import NavbarMobile from './navbar/navbar-mobile';

const Header: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const pathname = usePathname();

  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      {pathname === '/' ? <HighlightBoxBG2 /> : null}
    </>
  );
};

export default Header;
