import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { flipCard, selectAllCard } from "../features/board/boardSlice";

export const Card = ({ card }) => {
  const cards = useSelector(selectAllCard);
  const dispatch = useDispatch();
  const handleFlipCard = () => {
    dispatch(
      flipCard({
        index: card.id,
      })
    );
  };
  const visibles = cards.filter((c) => c.visible === true).map((c) => c.id);
  const matches = cards.filter((c) => c.matched === true).map((c) => c.id);
  let wrong = false;
  if (visibles.length === 2) {
    if (card.visible) {
      if (!matches.includes(card.id)) {
        wrong = true;
      }
    }
  }
  return (
    <CardWrapper
      onClick={() => {
        if (!(visibles.length === 2)) {
          handleFlipCard();
        }
      }}
      className={`h-full w-full ${
        !card.matched
          ? wrong
            ? "bg-red-600"
            : "bg-indigo-600"
          : "bg-green-600"
      } ${
        !card.matched &&
        !wrong &&
        visibles.length < 2 &&
        "hover:bg-indigo-800 hover:cursor-pointer"
      }`}
    >
      <CardMaxWidth className="h-full flex items-center justify-center">
        {card.visible || card.matched ? (
          <img
            className="w-12 ml-auto mr-auto"
            src={require(`../assets/${card.contents}.png`)}
            alt=""
          />
        ) : (
          <img
            className="w-12 ml-auto mr-auto"
            src={require("../assets/react-logo.png")}
            alt=""
          />
        )}
      </CardMaxWidth>
    </CardWrapper>
  );
};

const CardWrapper = styled.div``;
const CardMaxWidth = styled.div``;
