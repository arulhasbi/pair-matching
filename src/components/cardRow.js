import React from "react";
import styled from "styled-components";
import { Card } from "./card";

export const CardRow = ({ cards }) => {
  return (
    <CardRowWrapper className="my-5">
      <CardRowMaxWidth>
        <div className="flex gap-5">
          {cards.length > 0 &&
            cards.map((card, index) => (
              <div
                key={index}
                className="grow basis-1/3 text-center h-[100px] bg-indigo-600 flex items-center justify-center rounded-lg text-white font-extrabold antialiased shadow-md hover:cursor-pointer hover:bg-indigo-800"
              >
                <Card card={card} />
              </div>
            ))}
        </div>
      </CardRowMaxWidth>
    </CardRowWrapper>
  );
};

const CardRowWrapper = styled.div``;
const CardRowMaxWidth = styled.div``;
