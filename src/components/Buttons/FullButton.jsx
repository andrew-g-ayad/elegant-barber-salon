import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius6 orangeBg darkColor"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: none;
  width: 100%;
  padding: 15px;
  outline: none;
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;
