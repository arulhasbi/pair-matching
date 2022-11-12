import React from "react";
import "./app.css";
import styled from "styled-components";
import { Board } from "../features/board/board";
import { Footer } from "../components/footer";
import { useDispatch } from "react-redux";
import { setBoard } from "../features/board/boardSlice";

function App() {
  const dispatch = useDispatch();
  const handlePlayGame = () => {
    dispatch(setBoard());
  };
  return (
    <AppWrapper className="px-5">
      <AppMaxWidth>
        <p className="border button-85 mt-10 text-center w-max mr-auto ml-auto font-extrabold">
          React Pair Matching
        </p>
        <nav className="border w-max bg-white shadow-lg rounded-3xl ml-auto mr-auto mt-10 overflow-auto">
          <ul className="list-none flex">
            <li>
              <button
                type="button"
                className="text-md font-bold antialiased py-2 px-8 hover:bg-slate-100 hover:shadow-inner"
                onClick={handlePlayGame}
              >
                Start Game
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-md font-bold antialiased py-2 px-8 hover:bg-slate-100 hover:shadow-inner"
              >
                Try New Pair
              </button>
            </li>
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
