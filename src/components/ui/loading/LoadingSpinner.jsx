import React from "react";
import styled from "@emotion/styled";
import {keyframes} from "@emotion/css";

const spinning = () => keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LoadingSpinnerSvg = styled.svg`
  width: 6.4rem;
  animation: ${spinning} 1s ease infinite;
`;

const LoadingSpinner = ({ white }) => {
  return (
    <Loading>
      <LoadingSpinnerSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill={white ? "#FFFFFF" : "#6F5B7F"}
      >
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </LoadingSpinnerSvg>
    </Loading>
  );
};

export default LoadingSpinner;

