import React from 'react';

type Props = { className: string };

const CrossSvg = ({ className }: Props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute ${className}`}
  >
    <g filter="url(#filter0_di_64_2154)">
      <circle cx="9.23047" cy="9.27106" r="6.5" fill="url(#paint0_radial_64_2154)" />
    </g>
    <path d="M6.46094 11.5657L11.9995 6.97635M6.46094 6.97635L11.9995 11.5657" stroke="#114944" />
    <defs>
      <filter
        id="filter0_di_64_2154"
        x="0.730469"
        y="0.771057"
        width="21"
        height="21"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_2154" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_2154" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.101667 0 0 0 0 0.508333 0 0 0 0 0.466409 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_64_2154" />
      </filter>
      <radialGradient
        id="paint0_radial_64_2154"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.23047 6.27106) rotate(90) scale(9.5)"
      >
        <stop offset="0.151042" stopColor="#196C6A" />
        <stop offset="1" stopColor="#114B4A" />
      </radialGradient>
    </defs>
  </svg>
);
export default CrossSvg;
