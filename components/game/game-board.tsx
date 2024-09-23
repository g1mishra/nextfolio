import { HighlightBoxBG1 } from '@components/gradient-box';
import dynamic from 'next/dynamic';
import MemoryGame from './memory-game';

const CrossSvg = dynamic(() => import('@components/cross-svg'), { ssr: false });

const GameBoard = () => (
  <div
    id="gameBoard"
    className="w-full mb-2 relative sm:w-[475px] px-3 sm:px-6 py-8 bg-gameBox rounded-lg"
  >
    <div className="overflow-hidden absolute inset-0 -z-[1]">
      <HighlightBoxBG1 className="scale-125" />
    </div>

    <CrossSvg className="top-2 left-2" />
    <CrossSvg className="bottom-2 left-2" />
    <CrossSvg className="top-2 right-2" />
    <CrossSvg className="bottom-2 right-2" />
    <MemoryGame />
  </div>
);

export default GameBoard;
