interface Props {
  handleScroll: () => void;
  showTopArrow: boolean;
}

const ScrollIcon = ({ handleScroll, showTopArrow }: Props) => {
  return (
    <div className="absolute inset-x-0 bottom-[calc(var(--device-h)_*0.025)] z-[1]">
      <button
        className="sm:hidden animate-bounce bg-secondaryBG mx-auto w-10 h-10 flex justify-center items-center rounded-full border border-light"
        onClick={handleScroll}
      >
        <svg
          className={`w-5 h-5 text-[#43D9AD] ${showTopArrow ? 'rotate-180' : ''} `}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </div>
  );
};

export default ScrollIcon;
