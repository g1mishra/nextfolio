import { siteLinks } from '@lib/constants';
import { getProfile } from '@lib/config';

const socialLinks = siteLinks();

const Footer = () => {
  const profile = getProfile();
  
  return (
    <footer className="absolute z-50 bottom-0 inset-x-0 flex justify-between items-center overflow-hidden bg-secondaryBG border-t border-light">
      <div className="flex w-full sm:max-w-max sm:items-center gap-4">
        <p className="py-2 pl-4 whitespace-nowrap">find me on: </p>
        <div className="flex items-center flex-1">
          <a
            href={socialLinks.linkedin.href}
            rel="noreferrer"
            target="_blank"
            className="flex-1 sm:flex-none opacity-60 hover:opacity-100 p-2 border-light border-x flex items-center justify-center"
          >
            {socialLinks.linkedin.icon}
          </a>
          <a
            href={socialLinks.twitter.href}
            rel="noreferrer"
            target="_blank"
            className="flex-1 sm:flex-none opacity-60 hover:opacity-100 p-2 border-light border-l flex items-center justify-center"
          >
            {socialLinks.twitter.icon}
          </a>
          <a
            href={socialLinks.instagram.href}
            rel="noreferrer"
            target="_blank"
            className="flex-1 sm:flex-none opacity-60 hover:opacity-100 p-2 border-light border-x flex items-center justify-center"
          >
            {socialLinks.instagram.icon}
          </a>
          <a
            href={socialLinks.youtube.href}
            rel="noreferrer"
            target="_blank"
            className="flex-1 sm:flex-none opacity-60 hover:opacity-100 p-2 border-light border-x flex items-center justify-center"
          >
            {socialLinks.youtube.icon}
          </a>
        </div>
      </div>
      <div className="hidden sm:flex items-center border-light border-l pr-4">
        <a
          target="_blank"
          href={socialLinks.github.href}
          className="opacity-60 hover:opacity-100 flex items-center justify-center"
          rel="noreferrer"
        >
          <p className="px-4 py-2">@{profile.username} </p>
          {socialLinks.github.icon}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
