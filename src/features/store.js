import { configureStore } from "@reduxjs/toolkit";
import boardSliceReducer from "./board/boardSlice";

export const store = configureStore({
  reducer: {
    boardReducer: boardSliceReducer,
  },
});
