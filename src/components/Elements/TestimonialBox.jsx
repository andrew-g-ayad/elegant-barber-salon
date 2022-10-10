import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <Wrapper className="  ">
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p>{text}</p>
      <p className="orangeColor font13">
        <em>{author}</em>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-inline: 20px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -20px;
`;
