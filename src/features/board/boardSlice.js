import { createSlice } from "@reduxjs/toolkit";

const cards = [
  { id: 0, contents: "Provider", visible: true, matched: true },
  { id: 1, contents: "Provider", visible: true, matched: true },
  { id: 2, contents: "Selector", visible: true, matched: true },
  { id: 3, contents: "Selector", visible: true, matched: true },
  { id: 4, contents: "useSelector()", visible: true, matched: true },
  { id: 5, contents: "useSelector()", visible: true, matched: true },
  { id: 6, contents: "useDispatch()", visible: true, matched: true },
  { id: 7, contents: "useDispatch()", visible: true, matched: true },
  { id: 8, contents: "Pure Function", visible: true, matched: true },
  { id: 9, contents: "Pure Function", visible: true, matched: true },
  { id: 10, contents: "react-redux", visible: true, matched: true },
  { id: 11, contents: "react-redux", visible: true, matched: true },
];

const wordPairs = [
  "Provider",
  "Provider",
  "selector",
  "selector",
  "useSelector()",
  "useSelector()",
  "useDispatch()",
  "useDispatch()",
  "Pure Function",
  "Pure Function",
  "react-redux",
  "react-redux",
];

const randomWords = () => {
  const words = [];
  const pairs = [...wordPairs];
  for (let i = 0; i < pairs.length; i++) {
    const index = Math.floor(Math.random() * pairs.length);
    words.push(pairs[index]);
    pairs.slice(index, 1);
  }
  return words;
};

const option = {
  name: "board",
  initialState: {
    cards: cards,
  },
  reducers: {
    setBoard: (state, action) => {
      const words = randomWords();
      const nextState = [];
      for (let index = 0; index < words.length; index++) {
        nextState.push({
          id: index,
          contents: words[index],
          visibility: false,
          matched: false,
        });
      }
      return nextState;
    },
    flipCard: (state, action) => {
      state.cards[action.payload.index].visibility = true;
      const [indexOne, indexTwo] = state.cards
        .filter((card) => card.visibility === true)
        .map((card) => card.id);
      if (indexTwo !== undefined) {
        const cardOne = state.cards[indexOne];
        const cardTwo = state.cards[indexTwo];
        if (cardOne.contents === cardTwo.contents) {
          state.cards[indexOne].matched = true;
          state.cards[indexTwo].matched = true;
        }
      }
    },
  },
};

const boardSlice = createSlice(option);

export default boardSlice.reducer;

export const { setBoard, flipCard } = boardSlice.actions;
