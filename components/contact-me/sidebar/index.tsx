import { ArrowIcon, EMAIL_ICON } from '@components/icons';

const handleOpenAndClose = (e: any) => {
  document.querySelectorAll('details').forEach((d) => {
    if (d.open && !d.contains(e.target)) {
      d.open = false;
    }
  });
};

const links = [
  { name: 'YouTube channel', href: 'https://youtube.com/checktolearn' },
  { name: 'Github profile', href: 'https://github.com/g1mishra' },
  { name: 'Linkedin profile', href: 'https://linkedin.com/in/g1mishra' },
  { name: 'Instagram account', href: 'https://instagram.com/g1mishra' },
  { name: 'Twitter account', href: 'https://twitter.com/g1mishra' },
];

export default function ContactMeSidebar() {
  return (
    <div className="flex flex-col min-w-[22rem] max-w-full sm:max-w-max bg-secondaryBG sm:border-r border-light sm:overflow-y-auto ">
      <details
        open
        className="group/contact marker:content-[''] flex flex-col whitespace-nowrap border-b border-secondaryBG sm:border-light"
      >
        <summary className="w-full cursor-pointer select-none [&::-webkit-details-marker]:hidden">
          <div
            className="flex items-center px-4 py-2 bg-light sm:bg-secondaryBG"
            onClick={handleOpenAndClose}
          >
            <ArrowIcon className="-rotate-90 group-open/contact:rotate-0" />
            <p className="text-white font-normal ml-2.5">contact</p>
          </div>
        </summary>
        <div className="-mx-4 mb-2 border-t border-secondaryBG sm:border-light" />
        <div className="px-4 pb-2">
          <a
            className="flex items-center py-2"
            href="mailto:g1mishra.dev@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {EMAIL_ICON}
            <p className="ml-2">g1mishra.dev@gmail.com</p>
          </a>
        </div>
      </details>
      <details
        open
        className="group/find-me marker:content-[''] flex flex-col whitespace-nowrap border-b border-secondaryBG sm:border-light"
      >
        <summary className="w-full cursor-pointer select-none [&::-webkit-details-marker]:hidden">
          <div
            className="flex items-center px-4 py-2 bg-light sm:bg-secondaryBG"
            onClick={handleOpenAndClose}
          >
            <ArrowIcon className="-rotate-90 group-open/find-me:rotate-0" />
            <p className="text-white font-normal ml-2.5 flex items-center ">find-me-also-in</p>
          </div>
        </summary>
        <div className="-mx-4 mb-2 border-t border-secondaryBG sm:border-light" />
        <div className="px-4 py-2">
          {links.map((link) => (
            <a
              key={link.name}
              className="flex items-center pb-2"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z"
                  fill="#607B96"
                />
              </svg>

              <p className="ml-2">{link.name}</p>
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}
