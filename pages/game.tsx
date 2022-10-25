import MemoryGame from '@components/game/memory-game';
import React from 'react';

const Game = () => {
  return (
    <div className="flex justify-center items-center sm:min-h-[calc(100vh-8.25rem)]">
      <MemoryGame />
    </div>
  );
};

export default Game;
