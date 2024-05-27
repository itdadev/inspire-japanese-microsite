import styled from "@emotion/styled";
import {mq} from "@/lib/react-responsive/mediaQuery";

export const CommonTitleOne = styled.h2(({ theme, lowercase }) => ({
  fontWeight: theme.fontWeight.extraBold,
  textTransform: lowercase ? "initial" : "uppercase",
  fontSize: "2.4rem",

  [mq("tablet")]: {
    fontSize: "3.6rem",
  },

  [mq("desktop")]: {
    fontSize: "4.8rem",
  },
}));

export const CommonTitleThree = styled.h2(({ theme, lowercase }) => ({
  fontWeight: theme.fontWeight.bold,
  fontSize: "2rem",

  [mq("desktop")]: {
    fontSize: "3.2rem",
  },
}));

export const CommonDescOne = styled.h2(({ theme, lowercase }) => ({
  fontWeight: theme.fontWeight.regular,
  fontSize: "1.6rem",

  [mq("tablet")]: {
    fontSize: "1.8rem",
  },

  [mq("desktop")]: {
    fontSize: "2rem",
  },
}));

export const CommonDescTwo = styled.div(({ theme }) => ({
  fontWeight: theme.fontWeight.regular,
  fontSize: "1.6rem",
  lineHeight: 1.5 ,

  [mq("desktop")]: {
    fontSize: "1.8rem",
  },
}));