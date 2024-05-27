import React, { memo } from "react";
import {switchSlashToEmptySpace} from "@/utils/Functions";
import styled from "@emotion/styled";


const Container = styled.div(({ custom }) => ({
  "& img": {
    maxWidth: "100%",
    width: '100%',
    height: "auto",
  },

  li: {
    marginBottom: "1rem",
  },

  "& ul": {
    paddingLeft: "3rem",

    "& li": {
      listStyle: "initial",
    },
  },

  "& ol": {
    paddingLeft: "3rem",

    li: {
      listStyle: "decimal",
    },
  },

  ...custom,
}));

const DangerouslyHtml = ({ value, className, custom }) => {
  return typeof value === "string" ? (
    <Container
      className={className}
      custom={custom}
      dangerouslySetInnerHTML={{
        __html: switchSlashToEmptySpace(value),
      }}
    />
  ) : (
    value
  );
};

export default memo(DangerouslyHtml);
