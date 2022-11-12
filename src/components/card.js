import React from "react";
import styled from "styled-components";

export const Card = ({ card }) => {
  const handleFlipCard = () => {};
  return (
    <CardWrapper onClick={handleFlipCard} className="h-full w-full">
      <CardMaxWidth className="h-full flex items-center justify-center">
        {card.visible ? (
          <p>{card.contents}</p>
        ) : (
          <img
            className="w-10 ml-auto mr-auto"
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
