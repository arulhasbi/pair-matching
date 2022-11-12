import React, { useState } from "react";
import "./app.css";
import styled from "styled-components";
import { Board } from "../features/board/board";
import { Footer } from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import {
  setBoard,
  selectAllCard,
  resetBoard,
} from "../features/board/boardSlice";

function App() {
  let showNewPairButton = false;
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const cards = useSelector(selectAllCard);
  const visibles = cards.filter((c) => c.visible === true).map((c) => c.id);
  const handlePlayGame = () => {
    dispatch(setBoard());
    setPlay(!play);
  };
  const handleRestartGame = () => {
    const confirmation = window.prompt(
      "Your current gameplay will be lost if you restart the game. Type 'yes' if you want to proceed with the restart."
    );
    if (confirmation === "yes") {
      dispatch(setBoard());
      setPlay(!play);
    }
  };
  const handleResetBoard = () => {
    dispatch(resetBoard());
  };
  if (visibles.length === 2) {
    showNewPairButton = !showNewPairButton;
  }
  return (
    <AppWrapper className="px-5">
      <AppMaxWidth>
        <p className="border button-85 mt-10 text-center w-max mr-auto ml-auto font-extrabold">
          React Pair Matching
        </p>
        <nav className="border w-max bg-white shadow-lg rounded-3xl ml-auto mr-auto mt-10 overflow-auto">
          <ul className="list-none flex">
            <li>
              {!play ? (
                <button
                  type="button"
                  className="text-md font-bold antialiased py-2 px-8 hover:bg-slate-100 hover:shadow-inner"
                  onClick={handlePlayGame}
                >
                  Start Game
                </button>
              ) : (
                <button
                  type="button"
                  className="text-md font-bold antialiased py-2 px-8 hover:bg-slate-100 hover:shadow-inner"
                  onClick={handleRestartGame}
                >
                  Restart Game
                </button>
              )}
            </li>
            {showNewPairButton && (
              <li>
                <button
                  type="button"
                  className="text-md font-bold antialiased py-2 px-8 hover:bg-slate-100 hover:shadow-inner"
                  onClick={handleResetBoard}
                >
                  Try New Pair
                </button>
              </li>
            )}
          </ul>
        </nav>
        <main className="max-w-xl mr-auto ml-auto mt-10">
          <Board />
        </main>
        <Footer />
      </AppMaxWidth>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;
const AppMaxWidth = styled.div``;
