import { css, Global } from "@emotion/react";

const style = css`
    html {
      font-size: 62.5%;
      box-sizing: border-box;
      line-height: 1.2;
      overflow-x: hidden;
    }

    body {
      overflow-x: hidden;
      box-sizing: border-box;
      font-size: 1.6rem;
      padding: 0;
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
    }

    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-family: "Noto Sans JP", sans-serif;
    }

    a {
      color: inherit;
      font-size: inherit;
      text-decoration: none;
    }

    ul,
    li {
      list-style: none;
    }

    button {
      color: inherit;
      font: inherit;
      cursor: pointer;
      background: inherit;
    }

    .ellipsis-1 {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .ellipsis-2 {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .ellipsis-3 {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`;

function GlobalStyles() {
  return <Global styles={style} />;
}

export default GlobalStyles;
