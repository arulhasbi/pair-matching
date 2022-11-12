import React from "react";
import styled from "styled-components";
import { selectAllCard, setBoard } from "./boardSlice";
import { useSelector, useDispatch } from "react-redux";
import { CardRow } from "../../components/cardRow";

export const Board = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectAllCard);

  // board maker algorithm
  const numberOfCards = cards.length;
  const columns = 3;
  const rows = Math.floor(numberOfCards / columns);

  const getRowOfCards = (row) => {
    const rowOfCards = [];
    for (let index = 0; index < columns; index++) {
      const cardIndex = row * columns + index;
      rowOfCards.push(cards[cardIndex]);
    }
    return rowOfCards;
  };

  const cardRows = [];
  for (let index = 0; index < rows; index++) {
    const row = getRowOfCards(index);
    cardRows.push(<CardRow key={index} cards={row} />);
  }
  // =====================

  return (
    <BoardWrapper>
      <BoardMaxWidth>
        <div>{cardRows}</div>
      </BoardMaxWidth>
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div``;
const BoardMaxWidth = styled.div``;
