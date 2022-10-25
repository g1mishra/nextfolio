import React from 'react';

const HighlightBoxBG2 = () => {
  return (
    <div className="sm:hidden absolute inset-x-0">
      <svg viewBox="0 0 375 720" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4" filter="url(#filter0_f_56_2416)">
          <path
            d="M294.68 557.455L174.223 528.518L123.899 492.106L138.857 396.09L237.639 385.072L236.733 316.517L350.631 285.966L424.001 303.591L377.58 453.436L305.912 472.126L294.68 557.455Z"
            fill="#4D5BCE"
          />
        </g>
        <g opacity="0.4" filter="url(#filter1_f_56_2416)">
          <path
            d="M266.255 221.259L275.554 344.793L256.282 403.843L160.292 418.975L119.585 328.299L54.5936 350.132L-9.3357 251.04L-14.9998 175.796L141.863 174.153L181.58 236.668L266.255 221.259Z"
            fill="#43D9AD"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_56_2416"
            x="-50.1006"
            y="111.966"
            width="648.102"
            height="619.489"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="87"
              result="effect1_foregroundBlur_56_2416"
            />
          </filter>
          <filter
            id="filter1_f_56_2416"
            x="-189"
            y="0.152924"
            width="638.554"
            height="592.822"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="87"
              result="effect1_foregroundBlur_56_2416"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

const HighlightBoxBG1 = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1114 1030"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_f_64_2564)">
          <path
            d="M723.947 855.519L510.032 804.132L420.664 739.469L447.227 568.957L622.649 549.391L621.041 427.647L823.309 373.392L953.603 404.691L871.166 670.797L743.893 703.987L723.947 855.519Z"
            fill="#4D5BCE"
          />
        </g>
        <g opacity="0.4" filter="url(#filter1_f_64_2564)">
          <path
            d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
            fill="#43D9AD"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_64_2564"
            x="246.664"
            y="199.392"
            width="880.938"
            height="830.128"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="87"
              result="effect1_foregroundBlur_64_2564"
            />
          </filter>
          <filter
            id="filter1_f_64_2564"
            x="0"
            y="0.827728"
            width="863.983"
            height="782.77"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="87"
              result="effect1_foregroundBlur_64_2564"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export { HighlightBoxBG1, HighlightBoxBG2 };
