'use client';
import GameBoard from '@components/game/game-board';
import ScrollIcon from '@components/scroll-icon';
import { isElementInViewport, scrollIntoviewByRef, scrollToId } from '@lib/common';
import { useEffect, useState } from 'react';

export default function Game({}) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const scrollCB = () => {
      const elem = document.getElementById('gameBoard');
      if (elem && isElementInViewport(elem)) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    // scroll event listener
    window.addEventListener('scroll', scrollCB);
    return () => {
      window.removeEventListener('scroll', scrollCB);
    };
  }, []);

  function handleScroll(): void {
    if (showTopBtn) {
      const divRef = document.getElementById('intro');
      if (divRef) scrollIntoviewByRef(divRef);
    } else {
      scrollToId('gameBoard');
    }
  }

  return (
    <div className="flex flex-1 flex-col w-full sm:w-auto sm:flex-row sm:justify-center sm:items-center sm:flex-wrap gap-y-4 gap-x-5 sm:p-4">
      <ScrollIcon showTopArrow={showTopBtn} handleScroll={handleScroll} />
      <GameBoard />
    </div>
  );
}
