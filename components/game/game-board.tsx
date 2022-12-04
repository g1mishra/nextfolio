import CrossSvg from '@components/cross-svg';
import { HighlightBoxBG1 } from '@components/gradient-box';
import React from 'react';
import MemoryGame from './memory-game';

const GameBoard = () => (
  <>
    <div className="overflow-hidden absolute inset-0 -z-[1]">
      <HighlightBoxBG1 className="scale-125" />
    </div>

    <CrossSvg className="top-2 left-2" />
    <CrossSvg className="bottom-2 left-2" />
    <CrossSvg className="top-2 right-2" />
    <CrossSvg className="bottom-2 right-2" />
    <MemoryGame />
  </>
);

export default GameBoard;
