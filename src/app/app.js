import React from "react";
import "./app.css";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper>
      <AppMaxWidth>
        <nav className="border w-max bg-white shadow-lg rounded-3xl ml-auto mr-auto mt-10 overflow-auto">
          <ul className="list-none flex">
            <li>
              <button
                type="button"
                className="text-md font-bold antialiased py-2 px-8 hover:bg-slate-100 hover:shadow-inner"
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
      </AppMaxWidth>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;
const AppMaxWidth = styled.div``;
