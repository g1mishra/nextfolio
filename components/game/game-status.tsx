import { useEffect, useRef, useState } from 'react';

interface Props {
  totalFlips: number;
  gameStarted: boolean;
  won: boolean;
  // eslint-disable-next-line no-unused-vars
  setTimer: (time: number) => void;
}

const GameStatus = ({ totalFlips, gameStarted, setTimer, won }: Props) => {
  const [totalTime, setTotalTime] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (totalTime < 1) return;
    if (won === true) {
      setTimer(totalTime);
      clearInterval(intervalRef.current);
    } else {
      setTotalTime(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won]);

  useEffect(() => {
    if (gameStarted === true) {
      intervalRef.current = setInterval(() => {
        setTotalTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [gameStarted]);

  return (
    <div
      className={`flex w-[calc(100%-2rem)] justify-between p-2 -mt-1 border border-white border-opacity-10 rounded text-white text-opacity-40 text-[15px] sm:text-base ${
        won ? 'blur-[1px]' : ''
      }`}
    >
      <div>moves: {totalFlips} </div>
      <div>time: {totalTime} sec</div>
    </div>
  );
};
export default GameStatus;
