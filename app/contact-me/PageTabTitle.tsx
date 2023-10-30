import { CROSS_ICON } from '@components/icons';

const PageTabTitle = () => (
  <div className="hidden sm:block border-b border-light sticky top-0 bg-secondaryBG">
    <p className="flex justify-between items-center pl-8 pr-4 py-2 max-w-max space-x-12 border-r border-light">
      <span>contacts</span>
      {CROSS_ICON}
    </p>
  </div>
);

export default PageTabTitle;
