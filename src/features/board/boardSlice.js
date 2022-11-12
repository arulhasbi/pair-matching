import { createSlice } from "@reduxjs/toolkit";

const cards = [
  { id: 0, contents: "brazil", visible: true, matched: true },
  { id: 1, contents: "brazil", visible: true, matched: true },
  { id: 2, contents: "european-union", visible: true, matched: true },
  { id: 3, contents: "european-union", visible: true, matched: true },
  { id: 4, contents: "japan", visible: true, matched: true },
  { id: 5, contents: "japan", visible: true, matched: true },
  { id: 6, contents: "malaysia", visible: true, matched: true },
  { id: 7, contents: "malaysia", visible: true, matched: true },
  { id: 8, contents: "south-korea", visible: true, matched: true },
  { id: 9, contents: "south-korea", visible: true, matched: true },
  { id: 10, contents: "uruguay", visible: true, matched: true },
  { id: 11, contents: "uruguay", visible: true, matched: true },
];

const wordPairs = [
  "brazil",
  "brazil",
  "european-union",
  "european-union",
  "japan",
  "japan",
  "malaysia",
  "malaysia",
  "south-korea",
  "south-korea",
  "uruguay",
  "uruguay",
];

const randomWords = () => {
  const words = [];
  const pairs = [...wordPairs];
  const reps = pairs.length;
  for (let i = 0; i < reps; i++) {
    const index = Math.floor(Math.random() * pairs.length);
    words.push(pairs[index]);
    pairs.splice(index, 1);
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
          visible: false,
          matched: false,
        });
      }
      state.cards = nextState;
    },
    flipCard: (state, action) => {
      if (state.cards[action.payload.index].matched) {
        return;
      }
      state.cards[action.payload.index].visible = true;
      const [indexOne, indexTwo] = state.cards
        .filter((card) => card.visible === true)
        .map((card) => card.id);
      if (indexTwo !== undefined) {
        const cardOne = state.cards[indexOne];
        const cardTwo = state.cards[indexTwo];
        if (cardOne.contents === cardTwo.contents) {
          state.cards[indexOne].matched = true;
          state.cards[indexTwo].matched = true;
          state.cards[indexOne].visible = false;
          state.cards[indexTwo].visible = false;
        }
      }
    },
    resetBoard: (state, action) => {
      for (const card of state.cards) {
        card.visible = false;
      }
    },
  },
};

const boardSlice = createSlice(option);

export default boardSlice.reducer;

export const { setBoard, flipCard, resetBoard } = boardSlice.actions;

export const selectAllCard = (state) => {
  return state.boardReducer.cards;
};
