import { useEffect, useState } from 'react';
const GameStatus = ({
  totalFlips,
  gameStarted,
  setTimer,
}: {
  totalFlips: number;
  gameStarted: boolean;
  // eslint-disable-next-line no-unused-vars
  setTimer: (time: number) => void;
}) => {
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTotalTime((prev) => prev + 1);
    }, 1000);
    if (!gameStarted) {
      setTimer(totalTime);
      setTotalTime(0);
      clearInterval(timerInterval);
    }
    return () => {
      if (timerInterval !== null) clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted]);

  return (
    <div className="flex justify-between p-2 mx-4 -mt-1.5 border border-white border-opacity-10 rounded text-white text-opacity-50 text-[15px] sm:text-base">
      <div>moves: {totalFlips} </div>
      <div>time: {totalTime} sec</div>
    </div>
  );
};
export default GameStatus;
