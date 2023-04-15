import { Dispatch, SetStateAction } from 'react';

interface ILeftSidebarProps {
  currentPage: string;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const LeftSidebar = ({ currentPage, setIsSidebarOpen }: ILeftSidebarProps) => {
  return (
    <div className="hidden sm:flex flex-col items-center py-2.5 min-w-[4rem] border-r border-light sm:sticky left-0 top-0 bottom-0">
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        className="my-2.5"
        fill="currentColor"
        onClick={() => {
          setIsSidebarOpen((prev) => !prev);
        }}
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
      </svg>

      <svg
        className="my-2.5"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity={['skills', 'experience'].includes(currentPage) ? '1' : '0.4'}
          clipPath="url(#clip0_64_1623)"
        >
          <path
            d="M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z"
            fill="#607B96"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_1623">
            <rect width="24" height="24" fill="white" transform="translate(0 0.651855)" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="my-2.5"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          opacity={['bio', 'high-school', 'education'].includes(currentPage) ? '1' : '0.4'}
          clipPath="url(#clip0_64_1620)"
        >
          <path
            d="M5 20.6519H19V22.6519H5V20.6519ZM12 18.6519C9.87827 18.6519 7.84344 17.809 6.34315 16.3087C4.84285 14.8084 4 12.7736 4 10.6519C4 8.53012 4.84285 6.49529 6.34315 4.995C7.84344 3.49471 9.87827 2.65186 12 2.65186C14.1217 2.65186 16.1566 3.49471 17.6569 4.995C19.1571 6.49529 20 8.53012 20 10.6519C20 12.7736 19.1571 14.8084 17.6569 16.3087C16.1566 17.809 14.1217 18.6519 12 18.6519Z"
            fill="#607B96"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_1620">
            <rect width="24" height="24" fill="white" transform="translate(0 0.651855)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LeftSidebar;
