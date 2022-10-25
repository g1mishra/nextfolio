
// type Props = {};

// const reducer = () => {};

const MemoryGame = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   gameStarted: false,
  //   flippedCards: 0,
  //   totalFlips: 0,
  //   totalTime: 0,
  //   loop: null,
  // });

  return (
    <div className="game">
      <div className="controls">
        <button>Start</button>
        <div className="stats">
          <div className="moves">0 moves</div>
          <div className="timer">time: 0 sec</div>
        </div>
      </div>
      <div className="board-container">
        <div className="board" data-dimension="4"></div>
        <div className="win">You won!</div>
      </div>
    </div>
  );
};

export default MemoryGame;
