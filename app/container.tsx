'use client';
import GameBoard from '@components/game/game-board';
import ScrollIcon from '@components/scroll-icon';
import { isElementInViewport, scrollIntoviewByRef, scrollToId } from '@lib/common';
import { useCallback, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function HomePageContainer({ children }: Props) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const divRef = useRef<any>(null);

  const scrollCB = useCallback(() => {
    const elem = document.getElementById('gameBoard');
    if (elem && isElementInViewport(elem)) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  }, []);

  function handleScroll(): void {
    if (showTopBtn) {
      if (divRef.current !== null) scrollIntoviewByRef(divRef.current);
    } else {
      scrollToId('gameBoard');
    }
  }
  return (
    <main
      className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-wrap gap-y-[4vh] gap-x-[5vw] p-4"
      onScroll={scrollCB}
    >
      <div
        ref={divRef}
        className="flex flex-col min-h-[calc(var(--device-h)_-_14rem)] sm:min-h-max justify-between"
      >
        {children}
      </div>
      <ScrollIcon showTopArrow={showTopBtn} handleScroll={handleScroll} />
      <GameBoard />
    </main>
  );
}
