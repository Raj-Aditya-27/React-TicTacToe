import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(false);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [one, two, three, four, five, six, seven, eight, nine]);

  const checkWinner = () => {
    if (
      (one === two && two === three && one !== "") ||
      (one === four && four === seven && one !== "") ||
      (one === five && five === nine && one !== "") ||
      (three === six && six === nine && three !== "") ||
      (three === seven && seven === five && three !== "") ||
      (two === five && five === eight && two !== "") ||
      (four === five && five === six && four !== "") ||
      (seven === eight && eight === nine && seven !== "")
    ) {
      console.log("Winner");
      setWinner(true);
      let nextTurn = turn === "X" ? "O" : "X";
      setTurn(nextTurn);
      return;
    }

    if (
      one !== "" &&
      two != "" &&
      three != "" &&
      four != "" &&
      five != "" &&
      six != "" &&
      seven != "" &&
      eight != "" &&
      nine != ""
    ) {
      setDraw(true);
      return;
    }
  };

  const handleClick = (setCell) => {
    if (winner) return;
    let nextTurn = turn === "X" ? "O" : "X";
    setTurn(nextTurn);
    setCell(turn);
  };

  const playAgain = () => {
    setOne("");
    setTwo("");
    setThree("");
    setFour("");
    setFive("");
    setSix("");
    setSeven("");
    setEight("");
    setNine("");
    setTurn("X");
    setWinner(false);
    setDraw(false);
  };

  return (
    <>
      <div className="w-screen h-screen  bg-gray-100 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl ">TIC TAC TOE</h1>
        </div>

        <div className="rounded-lg  mt-10 flex h-auto cursor-pointer">
          <div>
            <div
              className="border text-lg w-20 h-16  bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setOne)}
            >
              {one}
            </div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setFour)}
            >
              {four}
            </div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded  m-2 flex justify-center items-center"
              onClick={() => handleClick(setSeven)}
            >
              {seven}
            </div>
          </div>
          <div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setTwo)}
            >
              {two}
            </div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setFive)}
            >
              {five}
            </div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setEight)}
            >
              {eight}
            </div>
          </div>
          <div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setThree)}
            >
              {three}
            </div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setSix)}
            >
              {six}
            </div>
            <div
              className="border text-lg w-20 h-16 bg-indigo-200 rounded m-2 flex justify-center items-center"
              onClick={() => handleClick(setNine)}
            >
              {nine}
            </div>
          </div>
        </div>
        <div className="m-4 w-40 h-24 flex flex-col gap-2 items-center">
          {draw && (
            <div className="p-1 w-32 text-lg text-center">Match Draw.</div>
          )}

          {!winner && !draw && (
            <div className="p-1 w-32 text-lg text-center">
              Player {turn} turn.
            </div>
          )}
          {winner && !draw && (
            <div className="p-1 w-32 text-lg text-center">
              Player {turn} wins.
            </div>
          )}
          {(winner || draw) && (
            <div
              className="px-5 py-2 cursor-pointer bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
              onClick={playAgain}
            >
              Play Again
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
