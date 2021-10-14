import React, { useState, useEffect, useCallback } from "react";
const winLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const boardArr = Array(9).fill(null);
const TicTocToe = () => {
  const [xplayer, setXPlayer] = useState(true);
  const [board, setBoard] = useState(boardArr);
  const [winner, setWinner] = useState("");
  const handleClick = (index) => {
    console.log("index", index);
    const temp = [...board];
    if (xplayer) {
      temp[index] = "X";
      setXPlayer(!xplayer);
    } else {
      temp[index] = "O";
      setXPlayer(!xplayer);
    }

    setBoard([...temp]);
  };

  const checkWinner = useCallback(() => {
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("winner is", board[a]);
        setWinner(board[a]);
      }
    }
  }, [board]);
  useEffect(() => {
    checkWinner();
    return () => {};
  }, [checkWinner]);

  return (
    <div className="container">
      <p>winner is {winner ? winner : ""}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          setBoard([...boardArr]);
          setWinner("");
          setXPlayer(true);
        }}
      >
        reset
      </button>
      <div className="row">
        {board?.length &&
          board?.map((e, i) => {
            return (
              <div
                className="col-sm-4 border"
                style={{ height: "100px", cursor: "pointer" }}
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(i);
                }}
                key={i}
              >
                <p>{e ? e : ""}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TicTocToe;
