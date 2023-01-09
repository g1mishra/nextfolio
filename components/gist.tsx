import React, { useEffect, useState } from 'react';
import { PrismAsyncLight } from 'react-syntax-highlighter';
import darkStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import CustomScrollbar from './custom-scrollbar';
import CopyToClipboard from './copy-to-clipboard';

interface IGistProps {
  lang: string;
  filename?: string;
  code: string;
}

const Gist: React.FC<IGistProps> = ({ lang, code }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (lang === 'text') {
      setIsReady(true);
    } else {
      import(
        `react-syntax-highlighter/dist/esm/languages/prism/${
          lang === 'shell' ? 'shell-session' : lang
        }`
      ).then((module) => {
        PrismAsyncLight.registerLanguage(lang, module.default);
        setIsReady(true);
      });
    }
  }, [lang]);

  if (isReady === false) return null;

  return (
    <div className="w-full mb-4 code-snippet relative group">
      <CopyToClipboard textData={code} />
      <PrismAsyncLight
        language={lang === '' ? 'text' : lang}
        wrapLines
        wrapLongLines={lang === 'text'}
        style={darkStyle}
        PreTag={({ children }) => <CustomScrollbar>{children}</CustomScrollbar>}
        CodeTag={({ className, style, children }) => {
          return (
            <code className={`${className} sm:!text-[15px]`} style={style}>
              {children}
            </code>
          );
        }}
      >
        {code}
      </PrismAsyncLight>
    </div>
  );
};

export default Gist;
