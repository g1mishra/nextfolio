import useMediaQuery from 'hooks/useMediaQuery';
import { HighlightBoxBG2 } from './highlight-box';
import Navbar from './navbar/navbar';
import NavbarMobile from './navbar/navbar-mobile';

const Header = () => {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {matches ? <NavbarMobile /> : <Navbar />}
      <HighlightBoxBG2 />
    </>
  );
};

export default Header;
