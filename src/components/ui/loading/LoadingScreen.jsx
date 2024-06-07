import React from 'react';
import styled from "@emotion/styled";
import {LOADING_SCREEN_ZINDEX} from "@/constants/zIndex";
import {image} from "@/theme";
import {mq} from "@/lib/react-responsive/mediaQuery";
import ScreenPortal from "@/components/potal/ScreenPotal";
import {LoadingSpinner} from "@/components/ui/loading/index";
import {BLOG_LIST_KEY} from "@/constants/queryKeys";
import {useIsFetching} from "@tanstack/react-query";

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
  const noShowKey = [BLOG_LIST_KEY];

  const isFetching = useIsFetching({
    predicate: (query) => {
      return !noShowKey.includes(query.queryKey[0]);
    },
  });

  return (
    isFetching ?
      <ScreenPortal>
        <LoadingScreenContainer>
          <LoadingPhasePurple>
            <LoadingLogo
              data={image.logoWhite.default}
              alt="Mohegan Inspire Entertainment Resort"
              aria-label="Mohegan Inspire Entertainment Resort"
              height={32}
            />

            <LoadingSpinner white/>
          </LoadingPhasePurple>
        </LoadingScreenContainer>
      </ScreenPortal>
      :
    <LoadingSpinner/>
  );
};

export default LoadingScreen;
