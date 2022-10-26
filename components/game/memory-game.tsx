import { randomShuffleArray } from '@lib/arr';
import { ReactElement, useEffect, useReducer, useState } from 'react';
import GameStatus from './game-status';

interface GameData {
  gameStarted: boolean;
  flippedCards: number[];
  matchedCards: number[];
  totalFlips: number;
  totalTime: number;
}

const initialstate: GameData = {
  gameStarted: false,
  flippedCards: [],
  matchedCards: [],
  totalFlips: 0,
  totalTime: 0,
};

export const ACTIONS = {
  START_GAME: 'START_GAME',
  UPDATE_TIMER: 'UPDATE_TIMER',
  UPDATE_TOTALFLIPS: 'UPDATE_TOTALFLIPS',
  UPDATE_FLIPCARDS: 'UPDATE_FLIPCARDS',
  RESET_FLIPCARDS: 'RESET_FLIPCARDS',
  UPDATE_MATCHCARD: 'UPDATE_MATCHCARD',
  RESET: 'RESET',
};

const reducer = (state: GameData, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTIONS.UPDATE_TIMER:
      return { ...state, totalTime: action.payload || state.totalTime + 1 };
    case ACTIONS.UPDATE_TOTALFLIPS:
      return { ...state, totalFlips: state.totalFlips + 1 };
    case ACTIONS.START_GAME:
      return { ...state, gameStarted: !state.gameStarted };
    case ACTIONS.UPDATE_FLIPCARDS:
      return {
        ...state,
        flippedCards: [...state.flippedCards, action.payload],
      };
    case ACTIONS.RESET_FLIPCARDS:
      return {
        ...state,
        flippedCards: action.payload,
      };
    case ACTIONS.UPDATE_MATCHCARD:
      return {
        ...state,
        matchedCards: [...state.matchedCards, ...action.payload],
      };
    case ACTIONS.RESET:
      return initialstate;
    default:
      return state;
  }
};

const EMOJIS = ['🌽', '🍑', '🍇', '🍉', '🍌', '🥭', '🍎', '🥥', '🍒', '🥑'];
const NO_OF_CELLS = 16;
let interval: string | number | NodeJS.Timeout | null | undefined = null;

const MemoryGame = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [won, setWon] = useState(false);
  const [shuffleEmojis, setShuffleEmojis] = useState(Array(NO_OF_CELLS).fill(''));

  // to avoid server & client html mismatch
  useEffect(() => {
    if (won === true) return;
    setShuffleEmojis(randomShuffleArray(EMOJIS, NO_OF_CELLS / 2));
  }, [won]);

  useEffect(() => {
    if (state.matchedCards.length !== shuffleEmojis.length) return;
    dispatch({ type: ACTIONS.START_GAME });
    setWon(true);
  }, [shuffleEmojis.length, state.matchedCards]);

  return (
    <div className="flex flex-col items-center w-full rounded-md gap-6">
      <GameStatus
        won={won}
        gameStarted={state.gameStarted}
        totalFlips={state.totalFlips}
        setTimer={(time) => dispatch({ type: ACTIONS.UPDATE_TIMER, payload: time })}
      />
      <div className={`grid grid-cols-4 gap-4 sm:gap-6 mb-2 ${won ? 'blur-md' : ''}`}>
        {shuffleEmojis.map((item, index) => (
          <div
            key={index}
            className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] cursor-pointer relative"
            onClick={() => {
              if (state.matchedCards.indexOf(index) > -1) return;
              if (state.flippedCards.indexOf(index) > -1) return;
              flipCard(index, state, dispatch, shuffleEmojis);
            }}
          >
            <div className={`front-card`}></div>
            {state.matchedCards.indexOf(index) > -1 || state.flippedCards.indexOf(index) > -1 ? (
              <div className={`back-card`}>{item}</div>
            ) : (
              <div className={`!transform-none `} />
            )}
          </div>
        ))}
      </div>

      {won ? (
        <AbsoluteDiv className="flex-col text-light text-center border border-white">
          <>
            <span>
              You won!
              <br />
              with <span>{state.totalFlips}</span> moves
              <br />
              under <span>{state.totalTime}</span> seconds
            </span>
            <button
              className="px-4 py-1 my-2 rounded bg-light text-white"
              onClick={() => {
                dispatch({ type: ACTIONS.RESET });
                setWon(false);
              }}
            >
              Reset
            </button>
          </>
        </AbsoluteDiv>
      ) : (
        !state.gameStarted && (
          <AbsoluteDiv className="flex-col">
            <button
              className="px-4 py-1 rounded bg-light text-white"
              onClick={() => dispatch({ type: ACTIONS.START_GAME })}
            >
              Start
            </button>
          </AbsoluteDiv>
        )
      )}
    </div>
  );
};

export default MemoryGame;

function flipCard(index: number, state: GameData, dispatch: any, shuffleEmojis: string[]) {
  let tempFlippedCards = [...state.flippedCards, index];

  dispatch({ type: ACTIONS.UPDATE_FLIPCARDS, payload: index });
  dispatch({ type: ACTIONS.UPDATE_TOTALFLIPS });

  if (!state.gameStarted) {
    dispatch({ type: ACTIONS.START_GAME });
  }
  if (tempFlippedCards.length === 2) {
    if (shuffleEmojis[tempFlippedCards[0]] === shuffleEmojis[index]) {
      dispatch({
        type: ACTIONS.UPDATE_MATCHCARD,
        payload: [...tempFlippedCards],
      });
      dispatch({ type: ACTIONS.RESET_FLIPCARDS, payload: [] });
    } else {
      interval = setTimeout(() => {
        dispatch({ type: ACTIONS.RESET_FLIPCARDS, payload: [] });
      }, 1000);
    }
  }
  if (tempFlippedCards.length === 3) {
    if (interval != null) {
      clearTimeout(interval);
    }
    dispatch({ type: ACTIONS.RESET_FLIPCARDS, payload: [index] });
  }
}

const AbsoluteDiv = ({ children, className }: { children: ReactElement; className: string }) => (
  <div className="absolute inset-0 top-[5vh] flex justify-center items-center p-2 rounded-md z-50 bg-opacity-10">
    <div
      className={`flex justify-center items-center bg-white bg-opacity-50 rounded-md w-10/12 py-4 ${className}`}
    >
      {children}
    </div>
  </div>
);
