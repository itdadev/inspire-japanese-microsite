import React from 'react';
import ScreenPortal from "@/components/ui/potal/ScreenPotal";
import styled from "@emotion/styled";
import {LOADING_SCREEN_ZINDEX} from "@/constants/zIndex";
import {image} from "@/theme";
import {mq} from "@/lib/react-responsive/mediaQuery";
import {LoadingSpinner} from "@/components/ui/loading/index";

const LoadingScreenContainer = styled.div(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.color.point01,
  width: "100%",
  minWidth: "100vw",
  height: "100vh",
  maxHeight: "100vh",
  zIndex: LOADING_SCREEN_ZINDEX,
  color: "white",
  overflow: "hidden",
}));

export const LoadingPhasePurple = styled.div(({ theme }) => ({
  left: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem 0",
  background: theme.color.point01,
}));

const LoadingLogo = styled.object(() => ({
  width: "24rem",
  height: "24rem",

  [mq("desktop")]: {
    width: "35rem",
  },
}));

const LoadingScreen = () => {
  return (
    <ScreenPortal>
      <LoadingScreenContainer>
        <LoadingPhasePurple >
          <LoadingLogo
            data={image.logoWhite.default}
            alt="Mohegan Inspire Entertainment Resort"
            aria-label="Mohegan Inspire Entertainment Resort"
            height={32}
          />

          <LoadingSpinner />
        </LoadingPhasePurple>
      </LoadingScreenContainer>
    </ScreenPortal>
  );
};

export default LoadingScreen;
